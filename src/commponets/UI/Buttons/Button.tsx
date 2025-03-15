import TgButton from '../../../images/icon/mingcute_telegram-fill.svg'
import * as React from "react";
import {ButtonProps} from "../../../typeTS/MainPageType.ts";

const Button: React.FC<ButtonProps> = ({children, className, color, size}) => {
    return (
        <>
            <a href="#" className={`flex items-center`}>
                <div
                    className={`flex justify-center gap-[10px] bg-primary-accent 
                    px-[34px] py-[20px] rounded-[8px] ${className} ${size}`}
                >
                    <p className={`${color} main-fond-bold`}>{children}</p>
                    <img src={TgButton} alt="tg"/>
                </div>
            </a>
        </>
    );
};

export default Button;