import { enquirySchema } from "../validators/enquiryValidator.js";

export const validateEnquiry = (req, res, next) => {
  const result = enquirySchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid enquiry data",
      errors: result.error.flatten().fieldErrors,
    });
  }

  req.body = result.data;

  next();
};