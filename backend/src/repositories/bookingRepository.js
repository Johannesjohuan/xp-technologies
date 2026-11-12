import pool from "../config/database.js";

export const createBooking = async (bookingData) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const bookingResult = await client.query(
      `INSERT INTO bookings (
        lead_id,
        meeting_date,
        start_time,
        end_time,
        meeting_method
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [
        bookingData.leadId,
        bookingData.meetingDate,
        bookingData.startTime,
        bookingData.endTime,
        bookingData.meetingMethod
      ]
    );

    const leadResult = await client.query(
      `UPDATE leads
       SET status = $1,
           updated_at = NOW()
       WHERE id = $2
       RETURNING id`,
      ["MEETING_BOOKED", bookingData.leadId]
    );

    if (leadResult.rowCount === 0) {
      const error = new Error("Lead not found");
      error.statusCode = 400;
      throw error;
    }

    await client.query("COMMIT");

    return bookingResult.rows[0];
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

export const getBookedTimes = async (date) => {
  const result = await pool.query(
    `SELECT start_time
     FROM bookings
     WHERE meeting_date = $1
       AND status IN ('PENDING', 'CONFIRMED', 'RESCHEDULED')`,
    [date]
  );

  return result.rows;
};

export const getBookingLead = async (leadId) => {
  const result = await pool.query(
    `SELECT id, full_name, email
     FROM leads
     WHERE id = $1`,
    [leadId]
  );

  return result.rows[0] || null;
};

export const reserveBooking = async (bookingData) => {
  const result = await pool.query(
    `INSERT INTO bookings (
      lead_id,
      meeting_date,
      start_time,
      end_time,
      meeting_method,
      status,
      google_request_id
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *`,
    [
      bookingData.leadId,
      bookingData.meetingDate,
      bookingData.startTime,
      bookingData.endTime,
      bookingData.meetingMethod,
      "PENDING",
      bookingData.googleRequestId
    ]
  );

  return result.rows[0];
};

export const confirmBooking = async ({
  bookingId,
  calendarEventId,
  meetingUrl
}) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const result = await client.query(
      `UPDATE bookings
       SET status = $1,
           calendar_event_id = $2,
           meeting_url = $3,
           updated_at = NOW()
       WHERE id = $4
         AND status = $5
       RETURNING *`,
      [
        "CONFIRMED",
        calendarEventId,
        meetingUrl,
        bookingId,
        "PENDING"
      ]
    );

    if (result.rowCount === 0) {
      throw new Error("Pending booking not found");
    }

    await client.query(
      `UPDATE leads
       SET status = $1,
           updated_at = NOW()
       WHERE id = $2`,
      ["MEETING_BOOKED", result.rows[0].lead_id]
    );

    await client.query("COMMIT");

    return result.rows[0];
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

export const releaseBooking = async (bookingId) => {
  const result = await pool.query(
    `UPDATE bookings
     SET status = $1,
         updated_at = NOW()
     WHERE id = $2
       AND status = $3
     RETURNING *`,
    ["CANCELLED", bookingId, "PENDING"]
  );

  return result.rows[0] || null;
};

export const getStalePendingBookings = async () => {
  const result = await pool.query(
    `SELECT
       id,
       google_request_id,
       calendar_event_id,
       created_at
     FROM bookings
     WHERE status = 'PENDING'
       AND created_at < NOW() - INTERVAL '15 minutes'
     ORDER BY created_at ASC`
  );

  return result.rows;
};

export const claimDueConsultationReminders = async () => {
  const result = await pool.query(
    `WITH due AS (
       SELECT b.id
       FROM bookings b
       JOIN leads l ON l.id = b.lead_id
       WHERE b.status = 'CONFIRMED'
         AND b.reminder_sent_at IS NULL
         AND (
           b.reminder_claimed_at IS NULL
           OR b.reminder_claimed_at < NOW() - INTERVAL '10 minutes'
         )
         AND (b.meeting_date + b.start_time)
             AT TIME ZONE 'Europe/Lisbon'
             <= NOW() + INTERVAL '2 hours'
         AND (b.meeting_date + b.start_time)
             AT TIME ZONE 'Europe/Lisbon'
             > NOW() + INTERVAL '90 minutes'
         AND b.meeting_url IS NOT NULL
       ORDER BY b.meeting_date, b.start_time
       FOR UPDATE OF b SKIP LOCKED
       LIMIT 20
     )
     UPDATE bookings b
     SET reminder_claimed_at = NOW()
     FROM due
     WHERE b.id = due.id
     RETURNING
       b.id,
       b.meeting_date::text AS meeting_date,
       b.start_time::text AS start_time,
       b.end_time::text AS end_time,
       b.meeting_url,
       b.lead_id`,
    []
  );

  return result.rows;
};

export const markConsultationReminderSent = async (bookingId) => {
  await pool.query(
    `UPDATE bookings
     SET reminder_sent_at = NOW(),
         reminder_claimed_at = NULL,
         updated_at = NOW()
     WHERE id = $1
       AND reminder_sent_at IS NULL`,
    [bookingId]
  );
};

export const releaseConsultationReminderClaim = async (bookingId) => {
  await pool.query(
    `UPDATE bookings
     SET reminder_claimed_at = NULL
     WHERE id = $1
       AND reminder_sent_at IS NULL`,
    [bookingId]
  );
};