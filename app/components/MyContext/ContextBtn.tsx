import { createContext } from "react";

export interface ContextBtnProps {
    handleBack: () => void;
}

const ContextBtn = createContext<ContextBtnProps | undefined>(undefined);

export default ContextBtn;