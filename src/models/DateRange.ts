import { z } from "zod";

export const dateRangeSchema = z.object({
    startDate: z.date(),
    endDate: z.union([
        z.date(), z.literal("Present")
    ])
})
.refine((data) =>
    data.endDate === "Present" ||
    data.endDate > data.startDate, 
    {
        message: "End date must be after start date or 'Present'",
        path: ["endDate"]
    }
)
.refine((data) =>
    data.startDate <= new Date(),
    {
        message: "Start date cannot be in the future",
        path: ["startDate"]
    }
);