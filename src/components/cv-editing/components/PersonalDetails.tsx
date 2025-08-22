import React from "react"
import "./PersonalDetails.css"
import { CVInputContainer } from "./InputText"
import { IPersonalDetails } from "../../../models/FormData";
import { IFormContextType } from "../../../context/CVHeaderContext";
import { FormCollapsableLegendMemo } from "./FormCollapsable";

export function PersonalDetailsForm({ curr, setState }: IFormContextType) {
    return (
        <>
            <form method="dialog" className="cv-editor-form">
                <fieldset>
                    <FormCollapsableLegendMemo legendText={"Personal Details"} />


                    <CVInputContainer value={curr.fullName} placeholder={"Full Name..."} type={"text"} id={"full-name"} name={"full-name"} label={"Full Name"} >
                        <input onChange={(e) => { setState({ ...curr, fullName: e.target.value }); }} />
                    </CVInputContainer>

                    <CVInputContainer value={curr.email} placeholder={"Email Address..."} type={"email"} id={"email-input"} name={"email"} label={"Email"} >
                        <input onChange={(e) => { setState({ ...curr, email: e.target.value }); }} />
                    </CVInputContainer>

                    <CVInputContainer value={curr.phone} placeholder={"Phone Number..."} type={"tel"} id={"phone-number"} name={"phone-number"} label={"Phone Number"} >
                        <input onChange={(e) => { setState({ ...curr, phone: e.target.value }); }} />
                    </CVInputContainer>

                    <CVInputContainer value={curr.address} placeholder={"Home Address..."} type={"text"} id={"address"} name={"address"} label={"Address"} >
                        <input onChange={(e) => { setState({ ...curr, address: e.target.value }); }} />
                    </CVInputContainer>

                </fieldset>
            </form>
        </>
    )
}