import { MouseEventHandler } from "react";
import { DeleteBtn } from "./FormUtilBtns";

import "./ExperienceSelect.css";
import { IEducation, IWorkExperience } from "../../../models/FormData";
import { CVInputContainer } from "./InputText";
import { IDateRange } from "../../../models/DateRange";


import { FieldErrors, UseFormRegister, Path } from "react-hook-form";

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

            <DeleteBtn onClick={delClick} />
        </div>
    );
}


export function EducationExperienceForm({
    institution,
    degree,
    dates,
    register,
    errors
}: Omit<IEducation, "id"> & { register: UseFormRegister<Omit<IEducation, "id">>, errors: FieldErrors<Omit<IEducation, "id">> }) {

    return (
        <div className="education-experience-container experience-select-container">

            <CVInputContainer
                placeholder="Please enter the institution name"
                label="Institution"
                type="text"
                id="institution"
                name="institution">
                <input {...register("institution")} defaultValue={institution} />
            </CVInputContainer>
            {errors.institution && <span className="error-message">{errors.institution.message}</span>}

            <CVInputContainer
                placeholder="Please enter the degree"
                label="Degree"
                type="text"
                id="degree"
                name="degree">
                <input {...register("degree")} defaultValue={degree} />
            </CVInputContainer>
            {errors.degree && <span className="error-message">{errors.degree.message}</span>}

            <DateFormInputs
                startDateID="education-start-date"
                endDateID="education-end-date"
                register={register}
                errors={errors}
                {...dates} />







            {/* <div className="input-date-container">

                <CVInputContainer
                    label="Start Date"
                    type="date"
                    id={"education-start-date"}
                    name="startDate"
                >
                    <input {...register("dates.startDate", { valueAsDate: true })} />
                </CVInputContainer>

                <CVInputContainer
                    label="End Date"
                    type="date"
                    id={"education-end-date"}
                    name="endDate">
                    <input {...register("dates.endDate", { valueAsDate: true })} />
                </CVInputContainer>
                {errors.dates?.startDate && <span className="error-message">{errors.dates.startDate.message}</span>}
                {errors.dates?.endDate && <span className="error-message">{errors.dates.endDate.message}</span>}


            </div> */}










        </div>
    );
}




export function WorkExperienceForm({
    companyName,
    jobTitle,
    jobDescription,
    dates,
    register,
    errors
}: Omit<IWorkExperience, "id"> & { register: UseFormRegister<Omit<IWorkExperience, "id">>, errors: FieldErrors<Omit<IWorkExperience, "id">> }) {
    return (
        <div className="work-experience-container">
            <CVInputContainer
                placeholder="Please enter the company name"
                label="Company Name"
                type="text"
                id="company-name"
                name="company-name">
                <input {...register("companyName")} defaultValue={companyName} />
            </CVInputContainer>
            {errors.companyName && <span className="error-message">{errors.companyName.message}</span>}

            <CVInputContainer
                placeholder="Please enter the job title"
                label="Job Title"
                type="text"
                id="job-title"
                name="job-title">
                <input {...register("jobTitle")} defaultValue={jobTitle} />
            </CVInputContainer>
            {errors.jobTitle && <span className="error-message">{errors.jobTitle.message}</span>}

            <CVInputContainer
                placeholder="Please enter the job description"
                label="Job Description"
                id="job-description"
                name="job-description">
                <textarea {...register("jobDescription")} defaultValue={jobDescription} />
            </CVInputContainer>
            {errors.jobDescription && <span className="error-message">{errors.jobDescription.message}</span>}

            <DateFormInputs
                startDateID="work-start-date"
                endDateID="work-end-date"
                register={register}
                errors={errors}
                {...dates} />






            {/* <div className="input-date-container">

                <CVInputContainer
                    label="Start Date"
                    type="date"
                    id={"work-start-date"}
                    name="startDate"
                >
                    <input {...register("dates.startDate", { valueAsDate: true })} />
                </CVInputContainer>

                <CVInputContainer
                    label="End Date"
                    type="date"
                    id={"work-end-date"}
                    name="endDate">
                    <input {...register("dates.endDate", { valueAsDate: true })} />
                </CVInputContainer>
                {errors.dates?.startDate && <span className="error-message">{errors.dates.startDate.message}</span>}
                {errors.dates?.endDate && <span className="error-message">{errors.dates.endDate.message}</span>}


            </div> */}









        </div>
    );
}


function DateFormInputs<T extends { dates: IDateRange }>({
    startDateID,
    endDateID,
    register,
    errors,
    ...dates
}: IDateRange & { startDateID: string; endDateID: string; } & { register: UseFormRegister<T>, errors: FieldErrors<IDateRange> }) {



    return (
        <div className="input-date-container">


            <div className={`cv-editor-label-input-container label-input-container-date`}>

                <label htmlFor={startDateID}>Start Date</label>
                <input id={startDateID} type="date" {...register("dates.startDate" as Path<T>, { valueAsDate: true })} defaultValue={dates.startDate.toISOString().split("T")[0]} />

            </div>

            <div className={`cv-editor-label-input-container label-input-container-date`}>

                <label htmlFor={endDateID}>End Date</label>
                <input id={endDateID} type="date" {...register("dates.endDate" as Path<T>, { valueAsDate: true })} defaultValue={dates.endDate === "Present" ? (new Date()).toISOString().split("T")[0] : dates.endDate.toISOString().split("T")[0]} />

            </div>


            {errors.startDate && <span className="error-message">{errors.startDate.message}</span>}
            {errors.endDate && <span className="error-message">{errors.endDate.message}</span>}



        </div>
    );
}