import TgButton from '../../../images/icon/tgicongreen.svg'
import * as React from "react";
import {ButtonProps} from "../../../typeTS/MainPageType.ts";

const Button: React.FC<ButtonProps> = ({children, color}) => {
    return (
        <>
            <a href="#" className={`flex items-center !border-primary-accent`}>
                <div
                    className={`flex justify-center items-center gap-[10px] bg-transparent 
                    px-[34px] py-[20px] rounded-[8px] border-primary-accent border-1`}
                >
                    <span className={`${color} main-fond-bold`}>{children}</span>
                    <img src={TgButton} alt="tg"/>
                </div>
            </a>
        </>
    );
};

export default Button;