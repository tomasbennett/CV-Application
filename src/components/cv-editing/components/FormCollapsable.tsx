import React from "react";
import arrowSVG from "../../../assets/open-arrow.svg";

import "./FormCollapsable.css";
import { IFormCollapsableProps } from "../../../models/Collapsable";


type IFormCollapsableLegendProps = {
    legendText: string;
    setOpenState: () => void;
};


export function FormCollapsableLegend({ legendText, setOpenState }: IFormCollapsableLegendProps) {
    return (
        <>
            <div className="form-title-container">
                <legend>{legendText}</legend>
                <div
                    onClick={setOpenState}
                    className="collapsable-legend-arrow">
                    <img src={arrowSVG} alt="collapsable-arrow" />
                </div>
            </div>
        </>
    );
}

export const FormCollapsableLegendMemo = React.memo(FormCollapsableLegend);