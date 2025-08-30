import { MouseEventHandler } from "react";
import { DeleteBtn } from "./FormUtilBtns";

import "./ExperienceSelect.css";
import { IEducation, IWorkExperience } from "../../../models/FormData";
import { CVInputContainer } from "./InputText";
import { IDateRange } from "../../../models/DateRange";

type IExperienceSelect = {
    btnTitle: string;
    onclick?: MouseEventHandler<HTMLDivElement>;
};

export function ExperienceSelectBtn({
    btnTitle,
    onclick
}: IExperienceSelect) {
    return (
        <div
            role="button"
            onClick={onclick}
            className="page-change-btn experience-select-btn cv-editor-label-input-container">
            <span className="experience-title">{btnTitle}</span>

            <DeleteBtn />
        </div>
    );
}


export function EducationExperienceForm({
    institution,
    degree,
    dates
}: Omit<IEducation, "id">) {
    return (
        <div className="education-experience-container experience-select-container">
            
            <CVInputContainer
                label="Institution"
                type="text"
                id="institution"
                name="institution"
                value={institution}>
                <input />
            </CVInputContainer>

            <CVInputContainer
                label="Degree"
                type="text"
                id="degree"
                name="degree"
                value={degree}>
                <input />
            </CVInputContainer>

            <DateFormInputs
                startDateID="education-start-date"
                endDateID="education-end-date"
                {...dates} />

        </div>
    );
}




export function WorkExperienceForm({
    companyName,
    jobTitle,
    jobDescription,
    dates
}: Omit<IWorkExperience, "id">) {
    return (
        <div className="work-experience-container">
            <CVInputContainer
                label="Company Name"
                type="text"
                id="company-name"
                name="company-name"
                value={companyName}>
                <input />
            </CVInputContainer>

            <CVInputContainer
                label="Job Title"
                type="text"
                id="job-title"
                name="job-title"
                value={jobTitle}>
                <input />
            </CVInputContainer>

            <CVInputContainer
                label="Job Description"
                id="job-description"
                name="job-description"
                value={jobDescription}>
                <textarea />
            </CVInputContainer>

            <DateFormInputs
                startDateID="work-start-date"
                endDateID="work-end-date"
                {...dates} />
        </div>
    );
}


function DateFormInputs({
    startDateID,
    endDateID,
    ...dates
}: IDateRange & { startDateID: string; endDateID: string; }) {
    return (
        <div className="input-date-container">

            <CVInputContainer
                label="Start Date"
                type="date"
                id={startDateID}
                name="start-date"
                value={dates.startDate.toDateString()}>
                <input />
            </CVInputContainer>

            <CVInputContainer
                label="End Date"
                type="date"
                id={endDateID}
                name="end-date"
                value={typeof dates.endDate === "string" ? (new Date()).toDateString() : dates.endDate.toDateString()}>
                <input />
            </CVInputContainer>

        </div>
    );
}