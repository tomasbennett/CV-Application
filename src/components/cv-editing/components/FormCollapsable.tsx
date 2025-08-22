import React from "react";
import arrowSVG from "../../../assets/open-arrow.svg";

import "./FormCollapsable.css";


type FormCollapsableLegendProps = {
    legendText: string;
};


export function FormCollapsableLegend({ legendText }: FormCollapsableLegendProps) {
    return (
        <>
            <div className="form-title-container">
                <legend>{ legendText }</legend>
                <div className="collapsable-legend-arrow">
                    <img src={ arrowSVG } alt="collapsable-arrow" />
                </div>
            </div>
        </>
    );
}

export const FormCollapsableLegendMemo = React.memo(FormCollapsableLegend);