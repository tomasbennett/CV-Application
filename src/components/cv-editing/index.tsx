import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { IEducation, IFormData, IPersonalDetails, IProfessionalSummary, IWorkExperience, educationSchema, workExperienceSchema } from "../../models/FormData";
import { EditFormContainer } from "./components/FormEditable";
import { CVInputContainerMemo } from "./components/InputText"
import { CVHeaderContext } from "../../context/CVDataContext";
import { EducationExperienceForm, ExperienceSelectBtn, WorkExperienceForm } from "./components/ExperienceSelectBtn";
import { AddExperienceBtn } from "./components/AddExperience";
import { IFormTogglable } from "../../models/Collapsable";
import { FormUtilBtns } from "./components/FormUtilBtns";

import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";


import { DevTool } from "@hookform/devtools";




import "./components/SelectableForm.css";





export function EditForms() {
    const [isPersonalDetails, setPersonalDetails] = useState<boolean>(true);

    return (
        <div className="edit-form-container">
            <div className="form-type-toggle-btns">
                <button
                    type="button"
                    disabled={isPersonalDetails}
                    className="edit-form-personal-details-btn edit-form-toggle-btn"
                    onClick={() => setPersonalDetails(true)}>
                    Personal Details
                </button>
                <button
                    type="button"
                    disabled={!isPersonalDetails}
                    className="edit-form-layout-btn edit-form-toggle-btn"
                    onClick={() => setPersonalDetails(false)}>
                    Layout
                </button>
            </div>
            {isPersonalDetails ?
                <PersonalInfoForm />
                :
                <LayoutForm />
            }
        </div>
    );
}




export type IHandleFormState = {
    isOpen: IFormTogglable;
    payload: Omit<IEducation, "id"> & { saveFunction: (formData: Omit<IEducation, "id">) => void } | null;
}

export type IHandleWorkFormState = {
    isOpen: IFormTogglable;
    payload: Omit<IWorkExperience, "id"> & { saveFunction: (formData: Omit<IWorkExperience, "id">) => void } | null;
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



    const [handleWorkFormCurr, setWorkFormState] = useState<IHandleWorkFormState>({
        isOpen: "closed",
        payload: null
    });

    const isWorkOpen = handleWorkFormCurr.isOpen;

    const {
        register: registerEducation,
        handleSubmit: handleSubmitEducation,
        formState: { errors: educationErrors },
        control
    } = useForm<Omit<IEducation, "id">>(
        {
            resolver: zodResolver(educationSchema.omit({ id: true })),
            mode: "onSubmit",
            reValidateMode: "onChange"
        }
    );
    
    const {
        register: registerWork,
        handleSubmit: handleSubmitWork,
        formState: { errors: workErrors }
    } = useForm<Omit<IWorkExperience, "id">>(
        {
            resolver: zodResolver(workExperienceSchema.omit({ id: true })),
            mode: "onSubmit",
            reValidateMode: "onChange"
        }
    );


    return (
        <div className="edit-form-personal-details-container">
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

            <EditFormContainer
                legendText="Education"
                isOpenInitial={"closed"}
                onSubmit={handleSubmitEducation((data) => {
                    console.log(data.dates);
                    handleFormCurr.payload?.saveFunction(data);
                    setFormState({
                        isOpen: "closed",
                        payload: null
                    });
                }, (err) => { console.log(err); })}
                // onSubmit={(e) => {
                //     e.preventDefault();

                //     const formData = new FormData(e.currentTarget);

                //     const startDateValue = formData.get("startDate");
                //     const endDateValue = formData.get("endDate");

                //     const formObj: Partial<IEducation> = {
                //         institution: formData.get("institution")?.toString() ?? "",
                //         degree: formData.get("degree")?.toString() ?? "",
                //         dates: {
                //             startDate: typeof startDateValue === "string"
                //                 ? new Date(startDateValue)
                //                 : new Date("2020-01-01"),
                //             endDate: typeof endDateValue === "string"
                //                 ? new Date(endDateValue)
                //                 : "Present"
                //         }
                //     };

                //     const educationSchemaWithoutId = educationSchema.omit({ id: true });

                //     if (educationSchemaWithoutId.safeParse(formObj).success) {
                //         handleFormCurr.payload?.saveFunction(formObj as IEducation);
                //         setFormState({
                //             isOpen: "closed",
                //             payload: null
                //         });

                //         return;

                //     }

                // }}
                >

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
                                                    saveFunction: (data: Omit<IEducation, "id">) => {
                                                        // Here we want to update the existing education entry in the state
                                                        setState((prev: IFormData) => {
                                                            const updatedEducation = prev.education.map((e) => e.id === edu.id ?
                                                                { ...e, ...data }
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
                                        }}
                                    />

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
                                        saveFunction: (data: Omit<IEducation, "id">) => {
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
                                dates={handleFormCurr.payload?.dates}
                                register={registerEducation}
                                errors={educationErrors} />
                            <FormUtilBtns
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

            <DevTool control={control} />

            <EditFormContainer
                legendText="Work Experience"
                isOpenInitial={"closed"}
                onSubmit={handleSubmitWork((data) => {
                    handleWorkFormCurr.payload?.saveFunction(data);
                    setWorkFormState({
                        isOpen: "closed",
                        payload: null
                    });
                })}
                // onSubmit={(e) => {
                //     e.preventDefault();

                //     const formData = new FormData(e.currentTarget);

                //     const startDateValue = formData.get("startDate");
                //     const endDateValue = formData.get("endDate");

                //     const formObj: Partial<IWorkExperience> = {
                //         companyName: formData.get("company-name")?.toString() ?? "",
                //         jobTitle: formData.get("job-title")?.toString() ?? "",
                //         jobDescription: formData.get("job-description")?.toString() ?? "",

                //         dates: {
                //             startDate: typeof startDateValue === "string"
                //                 ? new Date(startDateValue)
                //                 : new Date("2020-01-01"),
                //             endDate: typeof endDateValue === "string"
                //                 ? new Date(endDateValue)
                //                 : "Present"
                //         }
                //     };

                //     const workSchemaWithoutId = workExperienceSchema.omit({ id: true });

                //     if (workSchemaWithoutId.safeParse(formObj).success) {
                //         handleWorkFormCurr.payload?.saveFunction(formObj as IWorkExperience);
                //         setWorkFormState({
                //             isOpen: "closed",
                //             payload: null
                //         });

                //         return;

                //     }
                // }}
                >


                {isWorkOpen === "closed" || handleWorkFormCurr.payload === null ?
                    <>
                        <div className="experience-selection-entries work-entries">
                            {workExperienceSummary.map((work: IWorkExperience) => (
                                <React.Fragment key={work.id}>

                                    <ExperienceSelectBtn
                                        btnTitle={work.companyName}
                                        onclick={() => {
                                            setWorkFormState({
                                                isOpen: "open",
                                                payload: {
                                                    companyName: work.companyName,
                                                    jobTitle: work.jobTitle,
                                                    jobDescription: work.jobDescription,
                                                    dates: work.dates,
                                                    saveFunction: (data: Omit<IWorkExperience, "id">) => {
                                                        // Here we want to update the existing education entry in the state
                                                        setState((prev: IFormData) => {
                                                            const updatedEducation = prev.workExperience.map((e) => e.id === work.id ?
                                                                { ...e, ...data }
                                                                : e);
                                                            return { ...prev, workExperience: updatedEducation };
                                                        });
                                                    }

                                                }
                                            });
                                        }}
                                        delClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();

                                            setState((prev: IFormData) => {
                                                const updatedEducation = prev.workExperience.filter((w) => w.id !== work.id);
                                                return { ...prev, workExperience: updatedEducation };
                                            });
                                        }}
                                    />


                                </React.Fragment>
                            ))}
                        </div>
                        <AddExperienceBtn
                            experience="Job"
                            onclick={() => {
                                setWorkFormState({
                                    isOpen: "open",
                                    payload: {
                                        companyName: "",
                                        jobDescription: "",
                                        jobTitle: "",
                                        dates: {
                                            startDate: new Date("01/01/2020"),
                                            endDate: "Present"
                                        },
                                        saveFunction: (data: Omit<IWorkExperience, "id">) => {
                                            // Here we want to add the new education entry to the state
                                            setState((prev: IFormData) => ({
                                                ...prev,
                                                workExperience: [...prev.workExperience, {
                                                    id: crypto.randomUUID(),
                                                    companyName: data.companyName ?? "",
                                                    jobTitle: data.jobTitle ?? "",
                                                    jobDescription: data.jobDescription ?? "",
                                                    dates: data.dates ?? { startDate: new Date("01/01/2020"), endDate: new Date("01/01/2025") }
                                                }]
                                            }));
                                        }
                                    }
                                })
                            }}
                        />

                    </>
                    :
                    <>
                        <div className="full-selectable-form-container">
                            <WorkExperienceForm
                                companyName={handleWorkFormCurr.payload?.companyName}
                                jobTitle={handleWorkFormCurr.payload?.jobTitle}
                                jobDescription={handleWorkFormCurr.payload?.jobDescription}
                                dates={handleWorkFormCurr.payload?.dates}
                                register={registerWork}
                                errors={workErrors}
                            />
                            <FormUtilBtns
                                onCancelClick={(e) => {
                                    e.preventDefault();

                                    setWorkFormState({
                                        isOpen: "closed",
                                        payload: null
                                    });
                                }}
                            />
                        </div>
                    </>}


            </EditFormContainer>

        </div>
    );
}






import "./components/LayoutForm.css";
import { ILayoutData } from "../../models/LayoutData";
import { ILayoutContextType, LayoutContext } from "../../context/CVLayoutContext";


export function LayoutForm() {
    const ctx: ILayoutContextType | null = useContext(LayoutContext);

    if (ctx === null || ctx.currLayout === null || ctx.setLayout === null) { return null; }

    const { currLayout, setLayout } = ctx;
    const { cvHeader, headerColour, font } = currLayout;


    return (
        <div className="edit-form-layout-details-container">
            <EditFormContainer
                legendText="Layout"
                isOpenInitial={"open"}>

                <div
                    className="layout-form-btns-container cv-editor-label-input-container"
                    data-layout={cvHeader}
                >
                    <div className="layout-form-title-btn-container">
                        <button disabled={cvHeader === "Top"} type="button" className="layout-form-btn" onClick={(e) => {
                            setLayout((prev: ILayoutData) => ({ ...prev, cvHeader: "Top" }))
                        }}></button>
                        <p className="layout-form-title">Top</p>
                    </div>
                    <div className="layout-form-title-btn-container">
                        <button disabled={cvHeader === "Left"} type="button" className="layout-form-btn" onClick={(e) => {
                            setLayout((prev: ILayoutData) => ({ ...prev, cvHeader: "Left" }))
                        }}></button>
                        <p className="layout-form-title">Left</p>
                    </div>
                    <div className="layout-form-title-btn-container">
                        <button disabled={cvHeader === "Right"} type="button" className="layout-form-btn" onClick={(e) => {
                            setLayout((prev: ILayoutData) => ({ ...prev, cvHeader: "Right" }))
                        }}></button>
                        <p className="layout-form-title">Right</p>
                    </div>

                </div>

            </EditFormContainer>

            <EditFormContainer
                legendText="Color Scheme"
                isOpenInitial={"open"}
            >

                <div
                    className="color-scheme-btns-container cv-editor-label-input-container"
                >
                    <CVInputContainerMemo
                        label="Primary Color"
                        name="primary-color"
                        id="primary-color"
                        type="color"
                        value={headerColour}>
                        <input onChange={(e) => {
                            setLayout((prev: ILayoutData) => ({ ...prev, headerColour: e.target.value as ILayoutData["headerColour"] }))
                        }} />
                    </CVInputContainerMemo>
                </div>

            </EditFormContainer>


            <EditFormContainer
                legendText="Font Style"
                isOpenInitial={"open"}
            >

                <div
                    className="font-style-btns-container cv-editor-label-input-container"
                    data-font-style={font}
                >

                    <button disabled={font === "Arial"} type="button" className="font-style-btn arial-font" onClick={(e) => {
                        setLayout((prev: ILayoutData) => ({ ...prev, font: "Arial" }))
                    }}>
                        <p className="font-style-btn-symbol">Aa</p>
                        <p className="font-style-btn-type-title">Arial</p>
                    </button>
                    <button disabled={font === "Monospace"} type="button" className="font-style-btn monospace-font" onClick={(e) => {
                        setLayout((prev: ILayoutData) => ({ ...prev, font: "Monospace" }))
                    }}>
                        <p className="font-style-btn-symbol">Aa</p>
                        <p className="font-style-btn-type-title">Mono</p>
                    </button>
                    <button disabled={font === "Times"} type="button" className="font-style-btn times-font" onClick={(e) => {
                        setLayout((prev: ILayoutData) => ({ ...prev, font: "Times" }))
                    }}>
                        <p className="font-style-btn-symbol">Aa</p>
                        <p className="font-style-btn-type-title">Times</p>
                    </button>

                </div>
            </EditFormContainer>
        </div>
    );
}
