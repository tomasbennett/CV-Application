import React, { useEffect } from "react"
import "./PersonalDetails.css"
import { CVInputContainerMemo } from "./InputText"
import { IFormContextType } from "../../../context/CVHeaderContext";
import { FormCollapsableLegendMemo } from "./FormCollapsable";
import { IFormCollapsableProps } from "../../../models/Collapsable";
import { useOpenForm } from "../../../hooks/useOpenForm";



export function PersonalDetailsForm({ curr, setState, isOpenInitial }: IFormContextType & { isOpenInitial: IFormCollapsableProps }) {
    const { isOpen, handleOpenStateChange } = useOpenForm(isOpenInitial);

    // So: What we want to do is whenever the isOpen state is either "open" or "opening" we want isMounted to be true immediately
    //HOWEVER, when isOpen is "closed" or "closing" we want to wait until the animation is done before setting isMounted to false

    return (
        <>
            <form
                method="dialog"
                className="cv-editor-form"
                data-open={isOpen}>
                <fieldset>
                    <FormCollapsableLegendMemo setOpenState={handleOpenStateChange} legendText={"Personal Details"} />

                    <CVInputContainerMemo value={curr.fullName} placeholder={"Full Name..."} type={"text"} id={"full-name"} name={"full-name"} label={"Full Name"} >
                        <input onChange={(e) => { setState({ ...curr, fullName: e.target.value }); }} />
                    </CVInputContainerMemo>

                    <CVInputContainerMemo value={curr.email} placeholder={"Email Address..."} type={"email"} id={"email-input"} name={"email"} label={"Email"} >
                        <input onChange={(e) => { setState({ ...curr, email: e.target.value }); }} />
                    </CVInputContainerMemo>

                    <CVInputContainerMemo value={curr.phone} placeholder={"Phone Number..."} type={"tel"} id={"phone-number"} name={"phone-number"} label={"Phone Number"} >
                        <input onChange={(e) => { setState({ ...curr, phone: e.target.value }); }} />
                    </CVInputContainerMemo>

                    <CVInputContainerMemo value={curr.address} placeholder={"Home Address..."} type={"text"} id={"address"} name={"address"} label={"Address"} >
                        <input onChange={(e) => { setState({ ...curr, address: e.target.value }); }} />
                    </CVInputContainerMemo>

                </fieldset>
            </form>
        </>
    )
}