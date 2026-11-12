import crypto from "node:crypto";
import {
  googleOAuthClient,
  googleCalendarScopes
} from "../config/googleOAuth.js";
import {
  saveGoogleRefreshToken
} from "../repositories/googleCredentialsRepository.js";

const pendingAuthorizations = new Map();

export const connectGoogleCalendar = (req, res) => {
  const state = crypto.randomBytes(32).toString("hex");

  pendingAuthorizations.set(state, Date.now() + 10 * 60 * 1000);

  const authorizationUrl = googleOAuthClient.generateAuthUrl({
    access_type: "offline",
    scope: googleCalendarScopes,
    prompt: "consent",
    state
  });

  return res.redirect(authorizationUrl);
};

export const googleAuthCallback = async (req, res) => {
  const { code, state, error } = req.query;

  if (typeof state !== "string") {
    return res.status(400).json({
      success: false,
      message: "Invalid Google authorization state"
    });
  }

  const expiresAt = pendingAuthorizations.get(state);

  pendingAuthorizations.delete(state);

  if (!expiresAt || Date.now() > expiresAt) {
    return res.status(400).json({
      success: false,
      message: "Google authorization expired or was not initiated by XP"
    });
  }

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Google authorization was declined or cancelled"
    });
  }

  if (typeof code !== "string" || !code) {
    return res.status(400).json({
      success: false,
      message: "Google authorization code is missing"
    });
  }

  try {
    const { tokens } = await googleOAuthClient.getToken(code);

    if (!tokens.refresh_token) {
      return res.status(400).json({
        success: false,
        message: "Google did not return a refresh token"
      });
    }
    await saveGoogleRefreshToken(tokens.refresh_token);

    console.log("Google Calendar authorization completed.");

    return res.status(200).json({
      success: true,
      message: "Google Calendar authorization successful. Secure token storage is the next step."
    });
  } catch (error) {
    console.error("Google authorization failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to complete Google authorization"
    });
  }
};