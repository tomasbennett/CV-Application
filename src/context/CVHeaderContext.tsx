import React, { createContext } from 'react';
import { IPersonalDetails } from '../models/FormData';

export interface IFormContextType {
    curr: IPersonalDetails;
    setState: (curr: IPersonalDetails) => void;
}

export const CVHeaderContext = createContext<IPersonalDetails | null>(null);