import React, { Dispatch, SetStateAction, createContext } from 'react';
import { IPersonalDetails } from '../models/FormData';

export interface IFormContextType {
    curr: IPersonalDetails;
    setState: (curr: IPersonalDetails) => void;
}

export const CVHeaderContext = createContext<{ curr: IPersonalDetails, setState: Dispatch<SetStateAction<IPersonalDetails>>} | null>(null);