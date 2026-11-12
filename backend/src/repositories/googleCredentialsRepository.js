import pool from "../config/database.js";
import {
  encryptToken,
  decryptToken
} from "../utils/tokenEncryption.js";

export const saveGoogleRefreshToken = async (refreshToken) => {
  const encryptedToken = encryptToken(refreshToken);

  const result = await pool.query(
    `INSERT INTO google_calendar_credentials (
      id,
      refresh_token
    )
    VALUES (1, $1)
    ON CONFLICT (id)
    DO UPDATE SET
      refresh_token = EXCLUDED.refresh_token,
      updated_at = NOW()
    RETURNING id, updated_at`,
    [encryptedToken]
  );

  return result.rows[0];
};

export const getGoogleRefreshToken = async () => {
  const result = await pool.query(
    `SELECT refresh_token
     FROM google_calendar_credentials
     WHERE id = 1`
  );

  if (result.rows.length === 0) {
    return null;
  }

  return decryptToken(result.rows[0].refresh_token);
};