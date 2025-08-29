import { IEducation, IFormData, IPersonalDetails, IProfessionalSummary, IWorkExperience } from "./models/FormData";


import { v4 as uuidv4 } from 'uuid';



export const defaultPersonalFormData: IPersonalDetails = {
    fullName: "Tomas Bennett",
    email: "tjs.bennett@gmail.com",
    phone: "0778887787",
    address: "None of your business, London, UK SW1A 1AA"
};

export const defaultProfileSummary: IProfessionalSummary = {
    profileSummary: "A highly motivated and skilled software developer with a strong background in full-stack development. Proficient in JavaScript, TypeScript, React, and Node.js, with a passion for creating efficient and scalable web applications. Excellent problem-solving skills and a keen eye for detail, committed to delivering high-quality code and continuously improving technical skills."
};

export const defaultEducation: IEducation[] = [
    {
        id: uuidv4(),
        institution: "University of Technology",
        degree: "Bachelor of Science in Computer Science",
        dates: {
            startDate: new Date("2015-09-01"),
            endDate: new Date("2019-06-30")
        }
    },
    {
        id: uuidv4(),
        institution: "Tech High School",
        degree: "High School Diploma",
        dates: {
            startDate: new Date("2011-09-01"),
            endDate: new Date("2015-06-30")
        }
    }
];


export const defaultWorkExperience: IWorkExperience[] = [
    {
        id: uuidv4(),
        companyName: "Tech Solutions Ltd.",
        jobTitle: "Frontend Developer",
        jobDescription: "Developed and maintained user interfaces using React and Redux. Collaborated with designers to implement responsive designs and improve user experience. Optimized application performance and ensured cross-browser compatibility.",
        dates: {
            startDate: new Date("2020-01-15"),
            endDate: "Present"
        }
    },
    {
        id: uuidv4(),
        companyName: "Web Innovations Inc.",
        jobTitle: "Junior Developer",
        jobDescription: "Assisted in the development of web applications using JavaScript and Node.js. Participated in code reviews and contributed to team meetings. Gained experience in Agile methodologies and version control with Git.",
        dates: {
            startDate: new Date("2019-07-01"),
            endDate: new Date("2019-12-31")
        }
    }
];

export const defaultEditFormData: IFormData = {
    personalDetails: defaultPersonalFormData,
    professionalSummary: defaultProfileSummary,
    education: defaultEducation,
    workExperience: defaultWorkExperience 
};