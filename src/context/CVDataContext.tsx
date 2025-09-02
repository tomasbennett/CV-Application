import React, { Dispatch, SetStateAction, createContext } from 'react';
import { IFormData } from '../models/FormData';

export interface IFormContextType {
    curr: IFormData;
    setState: (curr: IFormData) => void;
}

export const CVHeaderContext = createContext<{ curr: IFormData, setState: Dispatch<SetStateAction<IFormData>>} | null>(null);