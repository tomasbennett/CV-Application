import React, { use, useEffect } from "react"
import { IPersonalDetails } from "../../models/FormData"
import "./components/CVContainer.css"
import { CVHeader } from "./components/CVHeader"
import { CVMain, CVMemoMain } from "./components/CVMain"
import { ILayoutContextType, LayoutContext } from "../../context/CVLayoutContext"



export function CVLayout() {
    const ctx: ILayoutContextType | null = React.useContext(LayoutContext);

    if (!ctx || !ctx.currLayout) {
        return <div>Layout Context not available</div>;
    }

    const { currLayout } = ctx;

    useEffect(() => {
        document.documentElement?.style.setProperty('--cv-header-background-colour', currLayout.headerColour);
    }, [currLayout.headerColour]);

    return (
        <>
            <section className="cv-container"
                data-header-layout-position={currLayout.cvHeader}
                style={{
                    fontFamily:
                        currLayout.font === "Arial"
                            ? "Arial, sans-serif"
                            : currLayout.font === "Times"
                                ? '"Times New Roman", serif'
                                : currLayout.font === "Monospace"
                                    ? '"Courier New", monospace'
                                    : "inherit",
                }}
            >
                <CVHeader />
                <CVMain />
            </section>
        </>
    )
}

export const CVLayoutMemo = React.memo(CVLayout);