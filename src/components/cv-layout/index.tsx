import React from "react"
import { IPersonalDetails } from "../../models/FormData"
import "./components/CVContainer.css"
import { CVHeader } from "./components/CVHeader"
import { CVMain, CVMemoMain } from "./components/CVMain"



export function CVLayout() {
    return (
        <>
            <section className="cv-container" 
            data-header-layout-position="top"
            >
                <CVHeader />
                <CVMain />
            </section>
        </>
    )
}

export const CVLayoutMemo = React.memo(CVLayout);