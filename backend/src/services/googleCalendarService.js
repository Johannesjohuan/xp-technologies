import { google } from "googleapis";
import { getGoogleRefreshToken } from "../repositories/googleCredentialsRepository.js";

export const getGoogleCalendarClient = async () => {
  const refreshToken = await getGoogleRefreshToken();

  if (!refreshToken) {
    throw new Error("Google Calendar is not connected");
  }

  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  auth.setCredentials({
    refresh_token: refreshToken
  });

  return google.calendar({
    version: "v3",
    auth
  });
};

export const getGoogleCalendarStatus = async () => {
  const calendar = await getGoogleCalendarClient();

  const result = await calendar.calendarList.list({
    maxResults: 10
  });

  return result.data.items || [];
};

const extractMeetingUrl = (event) =>
  event.hangoutLink ||
  event.conferenceData?.entryPoints?.find(
    (entry) => entry.entryPointType === "video"
  )?.uri ||
  null;

export const getGoogleCalendarEvent = async (calendarEventId) => {
  const calendar = await getGoogleCalendarClient();

  try {
    const result = await calendar.events.get({
      calendarId: "primary",
      eventId: calendarEventId
    });

    return result.data;
  } catch (error) {
    if (
      error.code === 404 ||
      error.response?.status === 404
    ) {
      return null;
    }

    throw error;
  }
};

export const createGoogleMeetEvent = async ({
  customerName,
  meetingDate,
  startTime,
  endTime,
  calendarEventId
}) => {
  const calendar = await getGoogleCalendarClient();

  const result = await calendar.events.insert({
    calendarId: "primary",
    conferenceDataVersion: 1,
    sendUpdates: "none",
    requestBody: {
      id: calendarEventId,
      summary: `XP Technologies Consultation - ${customerName}`,
      description: "Business consultation with XP Technologies.",
      start: {
        dateTime: `${meetingDate}T${startTime}:00`,
        timeZone: "Europe/Lisbon"
      },
      end: {
        dateTime: `${meetingDate}T${endTime}:00`,
        timeZone: "Europe/Lisbon"
      },
      conferenceData: {
        createRequest: {
          requestId: calendarEventId,
          conferenceSolutionKey: {
            type: "hangoutsMeet"
          }
        }
      }
    }
  });

  return {
    calendarEventId: result.data.id,
    meetingUrl: extractMeetingUrl(result.data)
  };
};

export const waitForGoogleMeetLink = async (calendarEventId) => {
  for (let attempt = 0; attempt < 5; attempt++) {
    const event = await getGoogleCalendarEvent(calendarEventId);

    if (!event) {
      throw new Error("Google Calendar event could not be found");
    }

    const meetingUrl = extractMeetingUrl(event);

    if (meetingUrl) {
      return {
        calendarEventId: event.id,
        meetingUrl
      };
    }

    if (
      event.conferenceData?.createRequest?.status?.statusCode === "failure"
    ) {
      throw new Error("Google Meet link generation failed");
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  throw new Error("Google Meet link generation timed out");
};

export const deleteGoogleCalendarEvent = async (calendarEventId) => {
  const calendar = await getGoogleCalendarClient();

  try {
    await calendar.events.delete({
      calendarId: "primary",
      eventId: calendarEventId,
      sendUpdates: "none"
    });
  } catch (error) {
    if (
      error.code === 404 ||
      error.response?.status === 404
    ) {
      return;
    }

    throw error;
  }
};