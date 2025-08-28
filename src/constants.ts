import { IFormData, IPersonalDetails, IProfessionalSummary } from "./models/FormData";






export const defaultPersonalFormData: IPersonalDetails = {
    fullName: "Tomas Bennett",
    email: "tjs.bennett@gmail.com",
    phone: "0778887787",
    address: "None of your business, London, UK SW1A 1AA"
};

export const defaultProfileSummary: IProfessionalSummary = {
    profileSummary: "A highly motivated and skilled software developer with a strong background in full-stack development. Proficient in JavaScript, TypeScript, React, and Node.js, with a passion for creating efficient and scalable web applications. Excellent problem-solving skills and a keen eye for detail, committed to delivering high-quality code and continuously improving technical skills."
};


export const defaultEditFormData: IFormData = {
    personalDetails: defaultPersonalFormData,
    professionalSummary: defaultProfileSummary,
};