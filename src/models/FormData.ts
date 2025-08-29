import { z } from "zod";
import { dateRangeSchema } from "./DateRange";
import { id } from "zod/v4/locales/index.cjs";

export type IPersonalDetails = {
    fullName: string;
    email: string;
    phone: string;
    address: string;
};

export type IProfessionalSummary = {
    profileSummary: string;
};


const educationSchema = z.object({
    id: z.string().uuid(),
    institution: z.string().min(1, "Institution name is required"),
    degree: z.string().min(1, "Degree is required"),
    dates: dateRangeSchema
});

const workExperienceSchema = z.object({
    id: z.string().uuid(),
    companyName: z.string().min(1, "Company name is required"),
    jobTitle: z.string().min(1, "Job title is required"),
    jobDescription: z.string().min(1, "Job description is required"),
    dates: dateRangeSchema
});


export type IEducation = z.infer<typeof educationSchema>;
export type IWorkExperience = z.infer<typeof workExperienceSchema>;


export type IFormData = {
    personalDetails: IPersonalDetails;
    professionalSummary: IProfessionalSummary;
    education: IEducation[];
    workExperience: IWorkExperience[];
};