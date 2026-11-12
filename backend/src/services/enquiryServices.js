import {
  findDuplicateLead,
  createLead
} from "../repositories/leadRepository.js";

export const createEnquiryService = async (enquiryData) => {
  const existingLead = await findDuplicateLead(enquiryData);

  if (existingLead) {
    const error = new Error(
      "Details already exist. Please contact Customer Care."
    );

    error.statusCode = 409;
    throw error;
  }

  const newLead = await createLead(enquiryData);

  return newLead;
};