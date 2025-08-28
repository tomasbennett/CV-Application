export type IPersonalDetails = {
    fullName: string;
    email: string;
    phone: string;
    address: string;
};

export type IProfessionalSummary = {
    profileSummary: string;
};


export type IFormData = {
    personalDetails: IPersonalDetails;
    professionalSummary: IProfessionalSummary;
    education?: {
        institution: string;
        degree: string;
        startDate: string;
        endDate: string;
    }[];
    workExperience?: {
        companyName: string;
        jobTitle: string;
        startDate: string;
        endDate: string;
    }[];
};