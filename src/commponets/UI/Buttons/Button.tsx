import TgButton from '../../../images/icon/mingcute_telegram-fill.svg'
import * as React from "react";
import {ButtonProps} from "../../../typeTS/MainPageType.ts";

const Button: React.FC<ButtonProps> = ({children, className, color, size}) => {
    return (
        <>
            <a href="#" className="inline-flex">
                <div
                    className={`group flex items-center justify-center gap-2 bg-primary-accent
                    rounded-lg px-8 py-5 ${className} ${size} min-w-max relative`}
                >
                    <p className={`${color} main-fond-bold`}>{children}</p>
                    <img src={TgButton} alt="tg"/>
                </div>
            </a>
        </>
    );
};

export default Button;