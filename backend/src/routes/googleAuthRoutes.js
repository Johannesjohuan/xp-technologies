import express from "express";
import {
  connectGoogleCalendar,
  googleAuthCallback
} from "../controllers/googleAuthController.js";

const router = express.Router();

router.get("/connect", connectGoogleCalendar);
router.get("/callback", googleAuthCallback);

export default router;