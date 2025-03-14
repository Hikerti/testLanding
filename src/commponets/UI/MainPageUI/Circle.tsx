import * as React from "react";
import {CircleProps} from "../../../typeTS/MainPageType.ts";

const Circle: React.FC<CircleProps> = ({colorBG, border, children}) => {
    return (
        <div
            style={{background: colorBG, border: border}}
            className='flex flex-col items-center justify-center gap-6 w-[412px] h-[412px] rounded-[50%]'
        >
            {children}
        </div>
    );
};

export default Circle;