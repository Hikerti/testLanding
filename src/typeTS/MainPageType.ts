import {ReactNode} from "react";

export interface CardAdvantagesProps {
    children?: ReactNode;
    title?: string;
    sidetitle?: string;
}

export interface CardAdditionalInformationProps {
    title?: string;
    description?: string;
    price?: string;
    time?: string;
}

export interface CardProps {
    children?: ReactNode;
    className?: string;
    color?: string;
    border?: string;
}

export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    color?: string;
    size?: string;
}

export interface CurcleLanguageProps {
    children?: ReactNode;
    size?: string;
    position?: string;
}

export interface CircleProps {
    colorBG?: boolean;
    border?: boolean;
    children?: ReactNode;
    width?: string;
    height?: string;
    position?: string;
}


export interface ElementStepProps {
    number?: string;
    title?: string;
    sidetitle?: string;
}

export interface RadioButtonProps {
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
}