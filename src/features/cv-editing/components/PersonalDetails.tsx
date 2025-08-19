import React from "react"
import "./PersonalDetails.css"

export function PersonalDetailsForm() {
    return (
        <>
            <form method="dialog" className="cv-editor-form">
                <fieldset>
                    <legend>Personal Details</legend>

                    <div className="cv-editor-label-input-container label-input-container-text">

                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" id="full-name" name="full-name" />

                    </div>

                    <div className="cv-editor-label-input-container label-input-container-text">

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />

                    </div>

                    <div className="cv-editor-label-input-container label-input-container-tel">

                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="tel" id="phone-number" name="phone-number" />

                    </div>

                    <div className="cv-editor-label-input-container label-input-container-text">

                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" />

                    </div>

                </fieldset>
            </form>
        </>
    )
}