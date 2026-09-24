import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.email("Please provide a valid email address"),
  phone: z.string().trim().min(1, "Phone number is required"),
  companyName: z.string().trim().min(1, "Company name is required"),
  country: z.string().trim().min(1, "Country is required"),
  industry: z.string().trim().min(1, "Industry is required"),
  companySize: z.string().trim().optional(),
  serviceCategory: z.string().trim().min(1, "Service category is required"),
  serviceOther: z.string().trim().optional(),
  requirementsDescription: z
    .string()
    .trim()
    .min(1, "Requirements description is required"),
  currentSystemType: z.string().trim().optional(),
  currentSystemOther: z.string().trim().optional(),
  preferredMeetingMethod: z
    .string()
    .trim()
    .min(1, "Preferred meeting method is required"),
  consent: z.literal(true, {
    error: "Consent is required",
  }),
});