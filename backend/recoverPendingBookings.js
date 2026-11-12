import "dotenv/config";
import pool from "./src/config/database.js";
import { recoverPendingBookings } from "./src/services/bookingService.js";

try {
  await recoverPendingBookings();
  console.log("Pending booking recovery check completed");
} catch (error) {
  console.error("Pending booking recovery failed:", error);
  process.exitCode = 1;
} finally {
  await pool.end();
}