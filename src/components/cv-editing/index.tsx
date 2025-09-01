import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { IEducation, IFormData, IPersonalDetails, IProfessionalSummary, IWorkExperience, educationSchema } from "../../models/FormData";
import { EditFormContainer } from "./components/FormEditable";
import { CVInputContainerMemo } from "./components/InputText"
import { CVHeaderContext } from "../../context/CVHeaderContext";
import { EducationExperienceForm, ExperienceSelectBtn } from "./components/ExperienceSelectBtn";
import { AddExperienceBtn } from "./components/AddExperience";
import { useOpenForm } from "../../hooks/useOpenForm";
import is from "zod/v4/locales/is.cjs";
import { IFormCollapsableProps, IFormTogglable } from "../../models/Collapsable";
import { FormUtilBtns } from "./components/FormUtilBtns";


export function EditForms() {

    return (
        <>
            <PersonalInfoForm />
            <LayoutForm />
        </>
    );
}




type IHandleFormState = {
    isOpen: IFormTogglable;
    payload: Omit<IEducation, "id"> & { saveFunction: (formData: IEducation) => void } | null;
}



export function PersonalInfoForm() {
    const ctx: { curr: IFormData, setState: Dispatch<SetStateAction<IFormData>> } | null = useContext(CVHeaderContext);
    if (ctx === null || ctx.curr === null || ctx.setState === null) { return null; }

    const { curr, setState } = ctx;

    const personalInfo: IPersonalDetails = curr.personalDetails;
    const profileSummary: IProfessionalSummary = curr.professionalSummary;

    const educationSummary: IEducation[] = curr.education;
    const workExperienceSummary: IWorkExperience[] = curr.workExperience;


    const [handleFormCurr, setFormState] = useState<IHandleFormState>({
        isOpen: "closed",
        payload: null
    });

    const { isOpen } = handleFormCurr;


    return (
        <div className="edit-form-full-container">
            <EditFormContainer legendText="Personal Details" isOpenInitial={"open"}>
                <CVInputContainerMemo value={personalInfo.fullName} placeholder={"Full Name..."} type={"text"} id={"full-name"} name={"full-name"} label={"Full Name"} >
                    <input onChange={(e) => setState((prev: IFormData) => ({ ...prev, personalDetails: { ...prev.personalDetails, fullName: e.target.value } }))} />
                </CVInputContainerMemo>

                <CVInputContainerMemo value={personalInfo.email} placeholder={"Email Address..."} type={"email"} id={"email-input"} name={"email"} label={"Email"} >
                    <input onChange={(e) => setState((prev: IFormData) => ({ ...prev, personalDetails: { ...prev.personalDetails, email: e.target.value } }))} />
                </CVInputContainerMemo>

                <CVInputContainerMemo value={personalInfo.phone} placeholder={"Phone Number..."} type={"tel"} id={"phone-number"} name={"phone-number"} label={"Phone Number"} >
                    <input onChange={(e) => setState((prev: IFormData) => ({ ...prev, personalDetails: { ...prev.personalDetails, phone: e.target.value } }))} />
                </CVInputContainerMemo>

                <CVInputContainerMemo value={personalInfo.address} placeholder={"Home Address..."} type={"text"} id={"address"} name={"address"} label={"Address"} >
                    <input onChange={(e) => setState((prev: IFormData) => ({ ...prev, personalDetails: { ...prev.personalDetails, address: e.target.value } }))} />
                </CVInputContainerMemo>
            </EditFormContainer>

            <EditFormContainer legendText="Profile Summary" isOpenInitial={"open"}>

                <CVInputContainerMemo value={profileSummary.profileSummary} placeholder={"Profile Summary..."} id={"profile-summary"} name={"profile-summary"} label={"Profile Summary"} >
                    <textarea onChange={(e) => setState((prev: IFormData) => ({ ...prev, professionalSummary: { ...prev.professionalSummary, profileSummary: e.target.value } }))} />
                </CVInputContainerMemo>

            </EditFormContainer>

            <EditFormContainer legendText="Education" isOpenInitial={"closed"} onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.currentTarget);

                const startDateValue = formData.get("startDate");
                const endDateValue = formData.get("endDate");

                const formObj: Partial<IEducation> = {
                    institution: formData.get("institution")?.toString() ?? "",
                    degree: formData.get("degree")?.toString() ?? "",
                    dates: {
                        startDate: typeof startDateValue === "string"
                            ? new Date(startDateValue)
                            : new Date("2020-01-01"),
                        endDate: typeof endDateValue === "string"
                            ? new Date(endDateValue)
                            : "Present"
                    }
                };

                const educationSchemaWithoutId = educationSchema.omit({ id: true });

                if (educationSchemaWithoutId.safeParse(formObj).success) {
                    handleFormCurr.payload?.saveFunction(formObj as IEducation);
                    setFormState({
                        isOpen: "closed",
                        payload: null
                    });

                    return;

                }

            }}>

                {isOpen === "closed" || handleFormCurr.payload === null ?
                    <>
                        <div className="experience-selection-entries education-entries">
                            {educationSummary.map((edu: IEducation) => (
                                <React.Fragment key={edu.id}>

                                    <ExperienceSelectBtn
                                        btnTitle={edu.institution}
                                        onclick={() => {
                                            setFormState({
                                                isOpen: "open",
                                                payload: {
                                                    institution: edu.institution,
                                                    degree: edu.degree,
                                                    dates: edu.dates,
                                                    saveFunction: (data: IEducation) => {
                                                        // Here we want to update the existing education entry in the state
                                                        setState((prev: IFormData) => {
                                                            const updatedEducation = prev.education.map((e) => e.id === edu.id ?
                                                                { ...e, institution: data.institution ?? edu.institution, degree: data.degree ?? edu.degree, dates: data.dates ?? edu.dates }
                                                                : e);
                                                            return { ...prev, education: updatedEducation };
                                                        });
                                                    }

                                                }
                                            });
                                        }}
                                        delClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();

                                            setState((prev: IFormData) => {
                                                const updatedEducation = prev.education.filter((ed) => ed.id !== edu.id);
                                                return { ...prev, education: updatedEducation };
                                            });
                                        }} />

                                </React.Fragment>
                            ))}
                        </div>
                        <AddExperienceBtn
                            experience="Education"
                            onclick={() => {
                                setFormState({
                                    isOpen: "open",
                                    payload: {
                                        institution: "",
                                        degree: "",
                                        dates: {
                                            startDate: new Date("01/01/2020"),
                                            endDate: "Present"
                                        },
                                        saveFunction: (data: IEducation) => {
                                            // Here we want to add the new education entry to the state
                                            setState((prev: IFormData) => ({
                                                ...prev,
                                                education: [...prev.education, {
                                                    id: crypto.randomUUID(),
                                                    institution: data.institution ?? "",
                                                    degree: data.degree ?? "",
                                                    dates: data.dates ?? { startDate: new Date("01/01/2020"), endDate: "Present" }
                                                }]
                                            }));
                                        }
                                    }
                                });
                            }}
                        />
                    </>
                    :
                    <>
                        <div className="full-selectable-form-container">
                            <EducationExperienceForm
                                degree={handleFormCurr.payload?.degree}
                                institution={handleFormCurr.payload?.institution}
                                dates={handleFormCurr.payload?.dates} />
                            <FormUtilBtns
                                // onSaveClick={(e) => {
                                //     e.preventDefault();
                                //     // Here we want to add the new education entry to the state

                                //     handleFormCurr.payload?.saveFunction();

                                //     setFormState({
                                //         isOpen: "closed",
                                //         payload: null
                                //     });
                                // }} 
                                onCancelClick={(e) => {
                                    e.preventDefault();

                                    setFormState({
                                        isOpen: "closed",
                                        payload: null
                                    });
                                }}
                            />
                        </div>

                    </>
                }

            </EditFormContainer>

            <EditFormContainer legendText="Work Experience" isOpenInitial={"closed"}>
                <div className="experience-selection-entries work-entries">
                    {workExperienceSummary.map((work: IWorkExperience) => (
                        <React.Fragment key={work.id}>

                            <ExperienceSelectBtn btnTitle={work.companyName} onclick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();

                                setState((prev: IFormData) => {
                                    const updatedWork = prev.workExperience.filter((w) => w.id !== work.id);
                                    return { ...prev, workExperience: updatedWork };
                                });
                            }} />


                        </React.Fragment>
                    ))}
                </div>
                <AddExperienceBtn experience="Job" />
            </EditFormContainer>

        </div>
    );
}

export function LayoutForm() {

    return null;
}