import { Dispatch, SetStateAction, useContext } from "react";
import { IFormData, IPersonalDetails, IProfessionalSummary } from "../../models/FormData";
import { EditFormContainer } from "./components/FormEditable";
import { CVInputContainerMemo } from "./components/InputText"
import { CVHeaderContext } from "../../context/CVHeaderContext";


export function EditForms() {

    return (
        <>
            <PersonalInfoForm />
            <LayoutForm />
        </>
    );
}






export function PersonalInfoForm() {
    const ctx: {curr: IFormData, setState: Dispatch<SetStateAction<IFormData>>} | null = useContext(CVHeaderContext);
    if (ctx === null || ctx.curr === null || ctx.setState === null) { return null; }

    const { curr, setState } = ctx;

    const personalInfo: IPersonalDetails = curr.personalDetails;
    const profileSummary: IProfessionalSummary = curr.professionalSummary;

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

            <EditFormContainer legendText="Profile Summary" isOpenInitial={"closed"}>

                <CVInputContainerMemo value={profileSummary.profileSummary} placeholder={"Profile Summary..."} id={"profile-summary"} name={"profile-summary"} label={"Profile Summary"} >
                    <textarea onChange={(e) => setState((prev: IFormData) => ({ ...prev, professionalSummary: { ...prev.professionalSummary, profileSummary: e.target.value } }))} />
                </CVInputContainerMemo>

            </EditFormContainer>


        </div>
    );
}

export function LayoutForm() {

    return null;
}