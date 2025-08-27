import { Dispatch, SetStateAction, useContext, useState } from "react";
import { IPersonalDetails } from "../../models/FormData";
import { EditFormContainer } from "./components/FormEditable";
import { CVInputContainerMemo } from "./components/InputText"
import { defaultPersonalFormData } from "../../constants";
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
    const ctx: {curr: IPersonalDetails, setState: Dispatch<SetStateAction<IPersonalDetails>>} | null = useContext(CVHeaderContext);
    if (ctx === null || ctx.curr === null || ctx.setState === null) { return null; }

    const { curr, setState } = ctx;

    return (
        <>
            <EditFormContainer legendText="Personal Details" isOpenInitial={"open"}>
                <CVInputContainerMemo value={curr.fullName} placeholder={"Full Name..."} type={"text"} id={"full-name"} name={"full-name"} label={"Full Name"} >
                    <input onChange={(e) => { setState((prev: IPersonalDetails) => ({ ...prev, fullName: e.target.value })); }} />
                </CVInputContainerMemo>

                <CVInputContainerMemo value={curr.email} placeholder={"Email Address..."} type={"email"} id={"email-input"} name={"email"} label={"Email"} >
                    <input onChange={(e) => { setState((prev: IPersonalDetails) => ({ ...prev, email: e.target.value })) }} />
                </CVInputContainerMemo>

                <CVInputContainerMemo value={curr.phone} placeholder={"Phone Number..."} type={"tel"} id={"phone-number"} name={"phone-number"} label={"Phone Number"} >
                    <input onChange={(e) => { setState((prev: IPersonalDetails) => ({ ...prev, phone: e.target.value })) }} />
                </CVInputContainerMemo>

                <CVInputContainerMemo value={curr.address} placeholder={"Home Address..."} type={"text"} id={"address"} name={"address"} label={"Address"} >
                    <input onChange={(e) => { setState((prev: IPersonalDetails) => ({ ...prev, address: e.target.value })) }} />
                </CVInputContainerMemo>
            </EditFormContainer>
        </>
    );
}

export function LayoutForm() {

    return null;
}