import "./CVContainer.css"
import { CVHeader } from "./CVHeader"
import { CVMain } from "./CVMain"

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