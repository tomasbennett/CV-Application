import React, { useContext } from "react";
import "./MainCV.css"
import { IEducation, IFormData, IProfessionalSummary, IWorkExperience } from "../../../models/FormData";
import { CVHeaderContext } from "../../../context/CVDataContext";

export function CVMain() {
    const ctx: { curr: IFormData } | null = useContext(CVHeaderContext);

    if (!ctx?.curr) { return null; }

    const professionalSummary: IProfessionalSummary = ctx.curr.professionalSummary;
    
    const educationSummary: IEducation[] = ctx.curr.education;
    const workExperienceSummary: IWorkExperience[] = ctx.curr.workExperience;

    return (
        <>
            <main className="cv-main">
                
                <section className="cv-main-section">
                    <h2 className="cv-main-section-title">Professional Summary</h2>
                    <div className="cv-main-section-content">
                        <p>{ professionalSummary.profileSummary }</p>
                    </div>
                </section>

                {educationSummary.length > 0 ?
                    (<section className="cv-main-section">
                        <h2 className="cv-main-section-title">Education</h2>
                        <div className="cv-main-section-content">
                            {educationSummary.map((edu: IEducation) => (
                                <div key={edu.id} className="cv-education-entry">
                                    <h3>{edu.degree}</h3>
                                    <p>{edu.institution} | {edu.dates.startDate.toLocaleString()} - {edu.dates.endDate.toLocaleString()}</p>
                                </div>
                            ))}
                        </div>
                    </section>)
                : null}

                {workExperienceSummary.length > 0 ? 
                    (<section className="cv-main-section">
                        <h2 className="cv-main-section-title">Work Experience</h2>
                        <div className="cv-main-section-content">
                            {workExperienceSummary.map((work: IWorkExperience) => (
                                <div key={work.id} className="cv-work-entry">
                                    <h3>{work.jobTitle}</h3>
                                    <p>{work.companyName} | {work.dates.startDate.toLocaleString()} - {work.dates.endDate.toLocaleString()}</p>
                                    <p>{work.jobDescription}</p>
                                </div>
                            ))}
                        </div>
                    </section>) 
                : null}

            </main>
        </>
    )
}

export const CVMemoMain = React.memo(CVMain);