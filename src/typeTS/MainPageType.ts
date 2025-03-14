import {ReactNode} from "react";

export interface ButtonProps {
    children: ReactNode;
}

export interface CircleProps {
    colorBG: string;
    border: string;
    children: ReactNode;
}


export interface ElementStepProps {
    number?: string;
    title?: string;
    sidetitle?: string;
}