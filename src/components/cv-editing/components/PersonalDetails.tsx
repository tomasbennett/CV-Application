import React from "react"
import "./PersonalDetails.css"
import { CVInputContainer } from "./InputText"

export function PersonalDetailsForm() {
    return (
        <>
            <form method="dialog" className="cv-editor-form">
                <fieldset>
                    <legend>Personal Details</legend>

                    <CVInputContainer placeholder={"Full Name..."} type={"text"} id={"full-name"} name={"full-name"} label={"Full Name"} >
                        <input />
                    </CVInputContainer>

                    <CVInputContainer placeholder={"Email Address..."} type={"email"} id={"email-input"} name={"email"} label={"Email"} >
                        <input />
                    </CVInputContainer>

                    <CVInputContainer placeholder={"Phone Number..."} type={"tel"} id={"phone-number"} name={"phone-number"} label={"Phone Number"} >
                        <input />
                    </CVInputContainer>

                    <CVInputContainer placeholder={"Home Address..."} type={"text"} id={"address"} name={"address"} label={"Address"} >
                        <input />
                    </CVInputContainer>

                </fieldset>
            </form>
        </>
    )
}