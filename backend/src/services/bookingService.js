import crypto from "node:crypto";

import {
  getBookedTimes,
  getBookingLead,
  reserveBooking,
  confirmBooking,
  releaseBooking,
  getStalePendingBookings
} from "../repositories/bookingRepository.js";

import {
  createGoogleMeetEvent,
  getGoogleCalendarEvent,
  waitForGoogleMeetLink,
  deleteGoogleCalendarEvent
} from "./googleCalendarService.js";

import {
  sendConsultationConfirmationEmail
} from "./emailService.js";

const consultationTimes = [
  "09:30",
  "11:00",
  "14:00",
  "15:30",
  "17:00"
];

const createBookingError = (message, statusCode = 400) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const getLisbonDateTime = () => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Lisbon",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());

  const values = Object.fromEntries(
    parts.map(({ type, value }) => [type, value])
  );

  return {
    date: `${values.year}-${values.month}-${values.day}`,
    time: `${values.hour}:${values.minute}`
  };
};

const validateMeetingDate = (meetingDate) => {
  if (
    typeof meetingDate !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(meetingDate)
  ) {
    throw createBookingError("Invalid consultation date");
  }

  const [year, month, day] = meetingDate.split("-").map(Number);

  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    Number.isNaN(date.getTime()) ||
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    throw createBookingError("Invalid consultation date");
  }

  const now = getLisbonDateTime();

  if (meetingDate < now.date) {
    throw createBookingError(
      "You cannot book a consultation in the past"
    );
  }

  return now;
};

const validateMeetingTime = (meetingDate, startTime, now) => {
  if (!consultationTimes.includes(startTime)) {
    throw createBookingError("Invalid consultation time");
  }

  if (meetingDate === now.date && startTime <= now.time) {
    throw createBookingError(
      "This consultation time has already passed. Please select another time."
    );
  }
};

const reconcileGoogleEvent = async (calendarEventId) => {
  const event = await getGoogleCalendarEvent(calendarEventId);

  if (!event) {
    return true;
  }

  await deleteGoogleCalendarEvent(calendarEventId);

  return true;
};

export const createBookingService = async (bookingData) => {
  const {
    leadId,
    meetingDate,
    startTime,
    meetingMethod
  } = bookingData;

  const now = validateMeetingDate(meetingDate);

  validateMeetingTime(meetingDate, startTime, now);

  if (meetingMethod !== "google-meet") {
    throw createBookingError(
      "This meeting method is not yet available for automatic booking"
    );
  }

  const lead = await getBookingLead(leadId);

  if (!lead) {
    throw createBookingError("Lead not found", 404);
  }

  const [hours, minutes] = startTime.split(":").map(Number);

  const totalMinutes = hours * 60 + minutes + 30;

  const endTime = `${String(
    Math.floor(totalMinutes / 60)
  ).padStart(2, "0")}:${String(
    totalMinutes % 60
  ).padStart(2, "0")}`;

  const calendarEventId = crypto.randomBytes(16).toString("hex");

  const booking = await reserveBooking({
    ...bookingData,
    endTime,
    googleRequestId: calendarEventId
  });

  let confirmedBooking;

  try {
    let googleEvent;

    try {
      googleEvent = await createGoogleMeetEvent({
        customerName: lead.full_name,
        customerEmail: lead.email,
        meetingDate,
        startTime,
        endTime,
        calendarEventId
      });
    } catch (error) {
      const existingEvent = await getGoogleCalendarEvent(calendarEventId);

      if (!existingEvent) {
        throw error;
      }

      googleEvent = {
        calendarEventId: existingEvent.id,
        meetingUrl: existingEvent.hangoutLink || null
      };
    }

    if (!googleEvent.meetingUrl) {
      googleEvent = await waitForGoogleMeetLink(calendarEventId);
    }

    confirmedBooking = await confirmBooking({
      bookingId: booking.id,
      calendarEventId,
      meetingUrl: googleEvent.meetingUrl
    });
  } catch (error) {
    try {
      await reconcileGoogleEvent(calendarEventId);
      await releaseBooking(booking.id);
    } catch (cleanupError) {
      console.error(
        "Booking requires recovery:",
        booking.id,
        cleanupError
      );
    }

    throw error;
  }

  try {
    await sendConsultationConfirmationEmail({
      customerName: lead.full_name,
      customerEmail: lead.email,
      meetingDate,
      startTime,
      endTime,
      meetingUrl:
        confirmedBooking.meeting_url ||
        confirmedBooking.meetingUrl
    });

    console.log(
      "Consultation confirmation email sent:",
      lead.email
    );
  } catch (emailError) {
    console.error(
      "Consultation confirmation email failed:",
      emailError
    );
  }

  return confirmedBooking;
};

export const recoverPendingBookings = async () => {
  const pendingBookings = await getStalePendingBookings();

  for (const booking of pendingBookings) {
    if (!booking.google_request_id) {
      console.error(
        "Pending booking has no Google request ID:",
        booking.id
      );
      continue;
    }

    try {
      await reconcileGoogleEvent(booking.google_request_id);
      await releaseBooking(booking.id);
    } catch (error) {
      console.error(
        "Pending booking recovery failed:",
        booking.id,
        error
      );
    }
  }
};

export const getAvailabilityService = async (date) => {
  const now = validateMeetingDate(date);

  const bookedTimes = await getBookedTimes(date);

  const occupiedTimes = bookedTimes.map((booking) =>
    booking.start_time.slice(0, 5)
  );

  return consultationTimes.filter((time) => {
    const isBooked = occupiedTimes.includes(time);

    const hasPassed =
      date === now.date && time <= now.time;

    return !isBooked && !hasPassed;
  });
};