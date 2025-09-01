import { MouseEventHandler } from "react";
import { DeleteBtn } from "./FormUtilBtns";

import "./ExperienceSelect.css";
import { IEducation, IWorkExperience } from "../../../models/FormData";
import { CVInputContainer } from "./InputText";
import { IDateRange } from "../../../models/DateRange";

type IExperienceSelect = {
    btnTitle: string;
    onclick?: MouseEventHandler<HTMLDivElement>;
    delClick?: MouseEventHandler<HTMLButtonElement>;
};

export function ExperienceSelectBtn({
    btnTitle,
    onclick,
    delClick
}: IExperienceSelect) {
    return (
        <div
            role="button"
            onClick={onclick}
            className="page-change-btn experience-select-btn cv-editor-label-input-container">
            <span className="experience-title">{btnTitle}</span>

            <DeleteBtn onClick={delClick}/>
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
                placeholder="Please enter the institution name"
                label="Institution"
                type="text"
                id="institution"
                name="institution">
                <input defaultValue={institution} />
            </CVInputContainer>

            <CVInputContainer
                placeholder="Please enter the degree"
                label="Degree"
                type="text"
                id="degree"
                name="degree">
                <input defaultValue={degree} />
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
                placeholder="Please enter the company name"
                label="Company Name"
                type="text"
                id="company-name"
                name="company-name">
                <input defaultValue={companyName} />
            </CVInputContainer>

            <CVInputContainer
                placeholder="Please enter the job title"
                label="Job Title"
                type="text"
                id="job-title"
                name="job-title">
                <input defaultValue={jobTitle} />
            </CVInputContainer>

            <CVInputContainer
                placeholder="Please enter the job description"
                label="Job Description"
                id="job-description"
                name="job-description">
                <textarea defaultValue={jobDescription} />
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
                name="startDate"
                >
                <input defaultValue={dates.startDate.toISOString().split("T")[0]} />
            </CVInputContainer>

            <CVInputContainer
                label="End Date"
                type="date"
                id={endDateID}
                name="endDate">
                <input defaultValue={dates.endDate === "Present" ? (new Date()).toISOString().split("T")[0] : dates.endDate.toISOString().split("T")[0]} />
            </CVInputContainer>

        </div>
    );
}