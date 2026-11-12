import "dotenv/config";

import { sendConsultationReminderEmail } from "./src/services/emailService.js";

const runTest = async () => {
  try {
    const meetingDate = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Lisbon",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date());

    const result = await sendConsultationReminderEmail({
      customerName: "Johannes Johuan",
      customerEmail: process.env.SMTP_USER,
      meetingDate,
      startTime: "15:00",
      endTime: "15:30",
      meetingUrl: "https://meet.google.com/abc-defg-hij"
    });

    console.log("Test reminder email submitted successfully:", result);
  } catch (error) {
    console.error("Test reminder email failed:", error);
    process.exitCode = 1;
  }
};

runTest();