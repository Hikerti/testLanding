import * as React from "react";
import {CardProps} from "../../../typeTS/MainPageType.ts";

const Card: React.FC<CardProps> = ({children, className, border}) => {
    return (
        <div className={`flex-1 ${border}`}>
            <div className={`relative flex flex-col items-center rounded-[12px] ${className}`}>
                {children}
            </div>
        </div>
    );
};

export default Card;