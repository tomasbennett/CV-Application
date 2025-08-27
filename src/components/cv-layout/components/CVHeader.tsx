import { use, useContext } from "react"
import { IPersonalDetails } from "../../../models/FormData"
import "./HeaderCV.css"
import { CVHeaderContext } from "../../../context/CVHeaderContext";

export function CVHeader() {
    const ctx: { curr: IPersonalDetails } | null = useContext(CVHeaderContext);
    if (ctx === null || ctx.curr === null) { return null; }

    const { curr } = ctx;

    return (
        <>
            <header className="cv-header">
                <h1 className="cv-header-full-name">
                    <span className="cv-header-full-name-full">{ curr.fullName }</span>
                </h1>
                <p className="cv-header-email">
                    <span className="cv-header-email-text">{ curr.email }</span>
                </p>
                <p className="cv-header-phone">
                    <span className="cv-header-phone-text">{ curr.phone }</span>
                </p>
                <p className="cv-header-address">
                    <span className="cv-header-address-text">{ curr.address }</span>
                </p>

            </header>
        </>
    )
}