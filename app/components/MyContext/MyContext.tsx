import React, { createContext, ReactNode } from 'react';

export interface MyContextProps {
    text: string;
    textButton: string;
    closeModal: () => void;
    navigation: any;
    id: string;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export default MyContext;
