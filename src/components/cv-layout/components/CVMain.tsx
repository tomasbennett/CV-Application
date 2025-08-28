import React, { useContext } from "react";
import "./MainCV.css"
import { IFormData, IProfessionalSummary } from "../../../models/FormData";
import { CVHeaderContext } from "../../../context/CVHeaderContext";

export function CVMain() {
    const ctx: { curr: IFormData } | null = useContext(CVHeaderContext);

    if (!ctx?.curr) { return null; }

    const professionalSummary: IProfessionalSummary = ctx.curr.professionalSummary;


    return (
        <>
            <main className="cv-main">
                <section className="cv-main-section">
                    <h2 className="cv-main-section-title">Professional Summary</h2>
                    <div className="cv-main-section-content">
                        <p>{ professionalSummary.profileSummary }</p>
                    </div>
                </section>
                <section className="cv-main-section">
                    <h2 className="cv-main-section-title">Education</h2>
                    <div className="cv-main-section-content">
                        <p>Detail your educational background here.</p>
                    </div>
                </section>
                <section className="cv-main-section">
                    <h2 className="cv-main-section-title">Skills</h2>
                    <div className="cv-main-section-content">
                        <p>List your skills here.</p>
                    </div>
                </section>
                <section className="cv-main-section">
                    <h2 className="cv-main-section-title">Projects</h2>
                    <div className="cv-main-section-content">
                        <p>Describe your projects here.</p>
                    </div>
                </section>
            </main>
        </>
    )
}

export const CVMemoMain = React.memo(CVMain);