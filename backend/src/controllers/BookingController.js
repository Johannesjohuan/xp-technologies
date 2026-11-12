import {
  createBookingService,
  getAvailabilityService
} from "../services/bookingService.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await createBookingService(req.body);

    return res.status(201).json({
      success: true,
      message: "Consultation booked successfully",
      data: booking
    });
  } catch (error) {
    console.error("Failed to create booking:", error);

    if (error.code === "23505") {
      return res.status(409).json({
        success: false,
        message:
          "This consultation time is no longer available. Please select a different time slot."
      });
    }

    if (error.code === "23503") {
      return res.status(400).json({
        success: false,
        message: "The lead associated with this booking does not exist."
      });
    }

    if (error.statusCode === 400 || error.statusCode === 404) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Unable to complete your consultation booking. Please try again or contact support."
    });
  }
};

export const getAvailability = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({
        success: false,
        message: "Date is required"
      });
    }

    const availableTimes = await getAvailabilityService(date);

    return res.status(200).json({
      success: true,
      data: availableTimes
    });
  } catch (error) {
    console.error("Failed to get availability:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to get available consultation times"
    });
  }
};