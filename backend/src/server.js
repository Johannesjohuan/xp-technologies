import "dotenv/config";
import app from "./app.js";
import pool from "./config/database.js";
import { startConsultationReminderScheduler } from "./services/consultationReminderService.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const result = await pool.query("SELECT NOW()");

    console.log("Postgres connected successfully");
    console.log("Database Time:", result.rows[0].now);

    app.listen(PORT, () => {
      console.log(`XP Technologies API is running on port ${PORT}`);

      startConsultationReminderScheduler();
    });
  } catch (error) {
    console.error("Postgres connection failed:", error.message);
  }
};

startServer();



 