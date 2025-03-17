import TgButton from '../../../images/icon/tgiconwhite.svg'
import * as React from "react";
import {ButtonProps} from "../../../typeTS/MainPageType.ts";

const Button: React.FC<ButtonProps> = ({children, color}) => {
    return (
        <>
            <a href="#" className={`inline-flex items-center !border-primary-accent`}>
                <div
                    className={`flex justify-center items-center gap-[10px] 
                    px-[34px] py-[20px] rounded-[8px] background-gradient relative`}
                >
                    <span className={`${color} main-fond-bold !m-0 !p-0`}>{children}</span>
                    <img src={TgButton} alt="tg"/>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100
                     transition-opacity duration-200"></div>
                </div>
            </a>
        </>
    );
};

export default Button;