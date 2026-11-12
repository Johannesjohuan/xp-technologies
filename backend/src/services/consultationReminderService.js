import {
  claimDueConsultationReminders,
  getBookingLead,
  markConsultationReminderSent,
  releaseConsultationReminderClaim
} from "../repositories/bookingRepository.js";

import {
  sendConsultationReminderEmail
} from "./emailService.js";

let reminderCheckRunning = false;

export const processConsultationReminders = async () => {
  if (reminderCheckRunning) {
    return;
  }

  reminderCheckRunning = true;

  try {
    const bookings = await claimDueConsultationReminders();

    for (const booking of bookings) {
      try {
        const lead = await getBookingLead(booking.lead_id);

        if (!lead?.email) {
          throw new Error(
            `Customer email missing for booking ${booking.id}`
          );
        }

        await sendConsultationReminderEmail({
          customerName: lead.full_name,
          customerEmail: lead.email,
          meetingDate: booking.meeting_date,
          startTime: booking.start_time.slice(0, 5),
          endTime: booking.end_time.slice(0, 5),
          meetingUrl: booking.meeting_url
        });

        await markConsultationReminderSent(booking.id);

        console.log(
          `Consultation reminder sent for booking ${booking.id}`
        );
      } catch (error) {
        console.error(
          `Consultation reminder failed for booking ${booking.id}:`,
          error
        );

        try {
          await releaseConsultationReminderClaim(booking.id);
        } catch (releaseError) {
          console.error(
            "Could not release reminder claim:",
            releaseError
          );
        }
      }
    }
  } catch (error) {
    console.error("Reminder scheduler failed:", error);
  } finally {
    reminderCheckRunning = false;
  }
};

export const startConsultationReminderScheduler = () => {
  console.log("XP Technologies reminder scheduler started");

  processConsultationReminders();

  const interval = setInterval(() => {
    processConsultationReminders();
  }, 60 * 1000);

  return interval;
};