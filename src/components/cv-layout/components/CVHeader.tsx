import { use, useContext } from "react"
import { IFormData, IPersonalDetails } from "../../../models/FormData"
import "./HeaderCV.css"
import { CVHeaderContext } from "../../../context/CVDataContext";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function CVHeader() {
    const ctx: { curr: IFormData } | null = useContext(CVHeaderContext);
    if (!(ctx?.curr?.personalDetails)) { return null; }

    const curr: IPersonalDetails = ctx.curr.personalDetails;

    return (
        <>
            <header className="cv-header">
                <h1 className="cv-header-full-name">
                    <span className="cv-header-full-name-full">{ curr.fullName }</span>
                </h1>
                <p className="cv-header-email">
                    <FaEnvelope /><span className="cv-header-email-text">{ curr.email }</span>
                </p>
                <p className="cv-header-phone">
                    <FaPhone /><span className="cv-header-phone-text">{ curr.phone }</span>
                </p>
                <p className="cv-header-address">
                    <FaMapMarkerAlt /><span className="cv-header-address-text">{ curr.address }</span>
                </p>

            </header>
        </>
    )
}