import * as React from "react";
import {CircleProps} from "../../../typeTS/MainPageType.ts";

const Circle: React.FC<CircleProps> = ({colorBG, border, children, width, height, position}) => {
    return (
        <div
            style={{width: width, height: height}}
            className={`background-gradient flex flex-col items-center justify-center gap-6 w-[412px] h-[412px] rounded-[50%]
             ${colorBG ? ' background-gradient' : ''}
             ${border ? ' border-gradient' : ''} 
             ${position}`}
        >
            {children}
        </div>
    );
};

export default Circle;