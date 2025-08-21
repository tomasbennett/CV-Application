import { IPersonalDetails } from "../../../models/FormData"
import "./CVContainer.css"
import { CVHeader } from "./CVHeader"
import { CVMain } from "./CVMain"

export function CV({ curr }: { curr: IPersonalDetails }) {
    return (
        <>
            <section className="cv-container" 
            data-header-layout-position="top"
            >
                <CVHeader curr={curr} />
                <CVMain />
            </section>
        </>
    )
}