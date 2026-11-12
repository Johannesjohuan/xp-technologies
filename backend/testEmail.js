import "dotenv/config";

import { sendConsultationConfirmationEmail } from "./src/services/emailService.js";

try {
  const messageId = await sendConsultationConfirmationEmail({
    customerName: "XP Technologies Test",
    customerEmail: process.env.SMTP_USER,
    meetingDate: "2026-10-15",
    startTime: "11:00",
    endTime: "11:30",
    meetingUrl: "https://meet.google.com/abc-defg-hij"
  });

  console.log("Test email submitted successfully");
  console.log("Message ID:", messageId);
} catch (error) {
  console.error("Email test failed:", error.message);
}