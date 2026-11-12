import "dotenv/config";
import { createGoogleMeetEvent } from "./src/services/googleCalendarService.js";

const runTest = async () => {
  try {
    const event = await createGoogleMeetEvent({
      customerName: "XP Technologies Test",
      customerEmail: process.env.GOOGLE_TEST_EMAIL,
      meetingDate: process.env.GOOGLE_TEST_DATE,
      startTime: "11:00",
      endTime: "11:30"
    });

    console.log("Google Calendar test successful");

    console.log({
      calendarEventId: event.calendarEventId,
      meetingUrl: event.meetingUrl
    });
  } catch (error) {
    console.error("Google Calendar test failed:", error.message);
  }
};

runTest();