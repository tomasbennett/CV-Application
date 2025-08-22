import React from "react"
import { IPersonalDetails } from "../../../models/FormData"
import "./CVContainer.css"
import { CVHeader } from "./CVHeader"
import { CVMain, CVMemoMain } from "./CVMain"



export function CV() {
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

export const CVMemo = React.memo(CV);