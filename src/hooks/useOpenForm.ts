import React from "react";
import { IFormCollapsableProps } from "../models/Collapsable";



export function useOpenForm(isOpenInitial: IFormCollapsableProps): { isOpen: IFormCollapsableProps, handleOpenStateChange: () => void } {
    const [isOpen, setIsOpen] = React.useState<IFormCollapsableProps>(isOpenInitial);

    const handleOpenStateChange = () => {
        if (isOpen === "open" || isOpen === "opening") {
            setIsOpen("closing");
            return;
        }
        setIsOpen("opening");

    }

    return { isOpen, handleOpenStateChange };
}