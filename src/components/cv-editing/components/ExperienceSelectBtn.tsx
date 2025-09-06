import { MouseEventHandler } from "react";
import { DeleteBtn } from "./FormUtilBtns";

import "./ExperienceSelect.css";
import { IEducation, IWorkExperience } from "../../../models/FormData";
import { CVInputContainer } from "./InputText";
import { IDateRange } from "../../../models/DateRange";


import { FieldErrors, UseFormRegister, Path, Controller, Control, PathValue } from "react-hook-form";




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


export function EducationExperienceForm<T extends { dates: IDateRange }>({
    institution,
    degree,
    dates,
    control,
    register,
    errors
}: Omit<IEducation, "id"> & { control: Control<T>, register: UseFormRegister<Omit<IEducation, "id">>, errors: FieldErrors<Omit<IEducation, "id">> }) {

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
                control={control}
                errors={errors as FieldErrors<T>}
                {...dates} />










        </div>
    );
}




export function WorkExperienceForm<T extends { dates: IDateRange }>({
    companyName,
    jobTitle,
    jobDescription,
    dates,
    control,
    register,
    errors
}: Omit<IWorkExperience, "id"> & { control: Control<T>, register: UseFormRegister<Omit<IWorkExperience, "id">>, errors: FieldErrors<Omit<IWorkExperience, "id">> }) {
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
                control={control}
                errors={errors as FieldErrors<T>}
                {...dates} />









        </div>
    );
}


function DateFormInputs<T extends { dates: IDateRange }>({
    startDateID,
    endDateID,
    control,
    errors,
    ...dates
}: IDateRange & { startDateID: string; endDateID: string; } & { control: Control<T>, errors: FieldErrors<T> }) {



    return (
        <>



            <div className="input-date-container">


                <div className={`cv-editor-label-input-container label-input-container-date`}>

                    <label htmlFor={startDateID}>Start Date</label>
                    <Controller
                        control={control}
                        defaultValue={dates.startDate as PathValue<T, Path<T>>}
                        name={"dates.startDate" as Path<T>}
                        render={({ field }) => (
                            <input
                                id={startDateID}
                                type="date"
                                {...field}
                                value={field.value instanceof Date ? field.value.toISOString().split("T")[0] : ""}
                                onChange={(e) => field.onChange(new Date(e.target.value))}
                            />
                        )}
                    />

                    {/* <input id={startDateID} type="date" {...register("dates.startDate" as Path<T>, { valueAsDate: true })} defaultValue={dates.startDate.toISOString().split("T")[0]} /> */}



                </div>

                <div className={`cv-editor-label-input-container label-input-container-date`}>

                    <label htmlFor={endDateID}>End Date</label>
                    <Controller
                        control={control}
                        defaultValue={dates.endDate as PathValue<T, Path<T>>}
                        name={"dates.endDate" as Path<T>}
                        render={({ field }) => (
                            <input
                                id={endDateID}
                                type="date"
                                {...field}
                                value={field.value === "Present" ? (new Date()).toISOString().split("T")[0] : field.value instanceof Date ? field.value.toISOString().split("T")[0] : ""}
                                onChange={(e) => field.onChange(new Date(e.target.value))}
                            />
                        )}
                    />


                    {/* <input id={endDateID} type="date" {...register("dates.endDate" as Path<T>, { valueAsDate: true })} defaultValue={dates.endDate === "Present" ? (new Date()).toISOString().split("T")[0] : dates.endDate.toISOString().split("T")[0]} /> */}

                </div>





            </div>
            {(errors.dates as FieldErrors<IDateRange>)?.startDate && <p className="error-message">{(errors.dates as FieldErrors<IDateRange>).startDate?.message}</p>}
            {(errors.dates as FieldErrors<IDateRange>)?.endDate && <p className="error-message">{(errors.dates as FieldErrors<IDateRange>).endDate?.message}</p>}
        </>


    );
}