import { bookingSchema } from "../validators/bookingValidator.js";

export const validateBooking = (req, res, next) => {
  const result = bookingSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid booking data",
      errors: result.error.flatten().fieldErrors
    });
  }

  req.body = result.data;

  next();
};