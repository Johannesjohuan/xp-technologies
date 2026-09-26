import express from "express";
import { enquirySchema } from "../validators/enquiryValidator.js";

const router = express.Router();

router.post("/", (req, res) => {
  const result = enquirySchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid enquiry data",
      errors: result.error.flatten().fieldErrors,
    });
  }

  res.status(200).json({
    success: true,
    message: "Enquiry data is valid",
    data: result.data,
  });
});

export default router;