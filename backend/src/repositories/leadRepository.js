import pool from "../config/database.js";

export const findDuplicateLead = async ({
  email,
  phone,
  companyName
}) => {
  const result = await pool.query(
    `SELECT id
     FROM leads
     WHERE LOWER(email) = LOWER($1)
        OR phone = $2
        OR LOWER(company_name) = LOWER($3)
     LIMIT 1`,
    [
      email.trim(),
      phone.trim(),
      companyName.trim()
    ]
  );

  return result.rows[0] || null;
};

export const createLead = async (enquiryData) => {
  const result = await pool.query(
    `INSERT INTO leads (
      full_name,
      email,
      phone,
      company_name,
      country,
      state_region,
      industry,
      company_size,
      service_category,
      service_other,
      requirements_description,
      current_system_type,
      current_system_other,
      preferred_meeting_method,
      consent
    )
    VALUES (
      $1, $2, $3, $4, $5,
      $6, $7, $8, $9, $10,
      $11, $12, $13, $14, $15
    )
    RETURNING *`,
    [
      enquiryData.fullName,
      enquiryData.email,
      enquiryData.phone,
      enquiryData.companyName,
      enquiryData.country,
      enquiryData.stateRegion || null,
      enquiryData.industry,
      enquiryData.companySize || null,
      enquiryData.serviceCategory,
      enquiryData.serviceOther || null,
      enquiryData.requirementsDescription,
      enquiryData.currentSystemType || null,
      enquiryData.currentSystemOther || null,
      enquiryData.preferredMeetingMethod,
      enquiryData.consent
    ]
  );

  return result.rows[0];
};