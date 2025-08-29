import { MouseEventHandler } from "react";
import { DeleteBtn } from "./FormUtilBtns";

import "./ExperienceSelect.css";

type IExperienceSelect = {
    btnTitle: string;
    onclick?: MouseEventHandler<HTMLDivElement>;
};

export function ExperienceSelectBtn({
    btnTitle,
    onclick
 }: IExperienceSelect) {
    return (
        <div
            role="button"
            onClick={onclick}
            className="page-change-btn experience-select-btn cv-editor-label-input-container">
            <span className="experience-title">{btnTitle}</span>
            
            <DeleteBtn />
        </div>
    );
}