import express from "express";
import { validateEnquiry } from "../middleware/validateEnquiry.js";
import { createEnquiry } from "../controllers/enquiryController.js";

const router = express.Router();

router.post(
  "/",
  (req, res, next) => {
    console.log("ENQUIRY ROUTE HIT");
    console.log("REQUEST BODY:", req.body);
    next();
  },
  validateEnquiry,
  createEnquiry
);

export default router;