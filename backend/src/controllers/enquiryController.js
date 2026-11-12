import { createEnquiryService } from "../services/enquiryServices.js";

export const createEnquiry = async (req, res) => {
  try {
    const enquiry = await createEnquiryService(req.body);

    return res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Failed to create enquiry:", error);

    return res.status(error.statusCode || 500).json({
      success: false,
      message:
        error.statusCode === 409
          ? error.message
          : "Unable to submit enquiry",
    });
  }
};