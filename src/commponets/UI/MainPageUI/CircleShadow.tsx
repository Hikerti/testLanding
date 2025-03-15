import * as React from "react";
import {CircleProps} from "../../../typeTS/MainPageType.ts";

const CircleShadow: React.FC<CircleProps> = ({position}) => {
    return (
        <span
            style={{background: "linear-gradient(180deg, #4b4c49 0%, #21221e 100%)", filter: "blur(100px)"}}
            className={`absolute w-[15%] h-[15%] rounded-full ${position}`}>
        </span>
    );
};

export default CircleShadow;