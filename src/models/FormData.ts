export type IPersonalDetails = {
    fullName: string;
    email: string;
    phone: string;
    address: string;
};



export type IFormData = {
    personalDetails: IPersonalDetails;
    education: {
        institution: string;
        degree: string;
        startDate: string;
        endDate: string;
    }[];
    workExperience: {
        companyName: string;
        jobTitle: string;
        startDate: string;
        endDate: string;
    }[];
    skills: string[];
};