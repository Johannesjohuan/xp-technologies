import {z} from "zod";

export const bookingSchema = z.object ({

    leadId : z.uuid("invalid lead ID"),

    meetingDate:z
    .string()
    .trim()
    .min (1, "meeting date is required"),
    
    startTime: z 
    .string()
    .trim()
    .regex(
        /^([01]\d|2[0-3]):[0-5]\d$/,

      "Start time must use HH:MM format"
    ),

    meetingMethod: z.enum([

        "google-meet",
        "microsoft-teams",
        "phone"
    ])
});