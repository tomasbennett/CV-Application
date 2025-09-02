import React, { ReactNode, useEffect } from "react"
import "./FormEditable.css"
import { CVInputContainerMemo } from "./InputText"
import { IFormContextType } from "../../../context/CVDataContext";
import { FormCollapsableLegendMemo } from "./FormCollapsable";
import { IFormCollapsableProps } from "../../../models/Collapsable";
import { useOpenForm } from "../../../hooks/useOpenForm";



export function EditFormContainer({ children, isOpenInitial, legendText, onSubmit }: { children: ReactNode; isOpenInitial: IFormCollapsableProps; legendText: string; onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void }) {
    const { isOpen, handleOpenStateChange } = useOpenForm(isOpenInitial);
    // So: What we want to do is whenever the isOpen state is either "open" or "opening" we want isMounted to be true immediately
    //HOWEVER, when isOpen is "closed" or "closing" we want to wait until the animation is done before setting isMounted to false

    return (
        <>
            <form
                method="dialog"
                className="cv-editor-form"
                data-open={isOpen}
                onSubmit={onSubmit}>
                <fieldset>
                    <FormCollapsableLegendMemo setOpenState={handleOpenStateChange} legendText={legendText} />
                    { isOpen === "open" || isOpen === "opening" || isOpen === "closing" ? children : null }
                </fieldset>
            </form>
        </>
    )
}