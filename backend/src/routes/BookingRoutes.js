import express from "express";
import { validateBooking } from "../middleware/validateBooking.js";
import { createBooking,
    getAvailability
 } from "../controllers/BookingController.js";

const router = express.Router();
router.get("/availability", getAvailability);
router.post("/", validateBooking, createBooking);

export default router;