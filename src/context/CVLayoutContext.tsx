import { createContext } from "react";
import { ILayoutData } from "../models/LayoutData";
import { Dispatch, SetStateAction } from "react";

export type ILayoutContextType = {
    currLayout: ILayoutData;
    setLayout: Dispatch<SetStateAction<ILayoutData>>;
}


export const LayoutContext = createContext<ILayoutContextType | null>(null)