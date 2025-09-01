import React from "react";
import { IFormCollapsableProps } from "../models/Collapsable";



export function useOpenForm(isOpenInitial: IFormCollapsableProps): { isOpen: IFormCollapsableProps, handleOpenStateChange: () => void, handleSingleOpenStateChange: () => void } {
    const [isOpen, setIsOpen] = React.useState<IFormCollapsableProps>(isOpenInitial);

    const handleOpenStateChange = () => {
        // if (isOpen === "open" || isOpen === "opening") {
        //     setIsOpen("closing");
        //     return;
        // }
        // setIsOpen("opening");

        setIsOpen(prev => {
            if (prev === "opening") {
                return "open";
            }
            else if (prev === "closing") {
                return "closed";
            }
            else if (prev === "open") {
                return "closing";
            }
            else if (prev === "closed") {
                return "opening";
            }

            return prev;
        });

    }

    const handleSingleOpenStateChange = () => {
        setIsOpen(prev => (prev === "open" || prev === "opening" ? "closed" : "open"));
    }


    return { isOpen, handleOpenStateChange, handleSingleOpenStateChange };
}