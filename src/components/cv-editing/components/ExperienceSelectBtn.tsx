import { MouseEventHandler } from "react";
import { DeleteBtn } from "./FormUtilBtns";

import "./ExperienceSelect.css";

type IExperienceSelect = {
    btnTitle: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
};

export function ExperienceSelectBtn({
    btnTitle,
    onclick
 }: IExperienceSelect) {
    return (
        <button
            onClick={onclick}
            type="button"
            className="page-change-btn experience-select-btn cv-editor-label-input-container">
            <span className="experience-title">{btnTitle}</span>
            
            <DeleteBtn />
        </button>
    );
}