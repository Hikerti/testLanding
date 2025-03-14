import TgButton from '../../../images/icon/mingcute_telegram-fill.svg'
import * as React from "react";
import {ButtonProps} from "../../../typeTS/MainPageType.ts";

const Button: React.FC<ButtonProps> = ({children}) => {
    return (
        <>
            <button className='flex'>
                <a href="#" className='inline-flex gap-[10px] bg-primary-accent px-[32px] py-[20px] rounded-[8px]'>
                    <p className='!text-primary-black main-fond-bold'>{children}</p>
                    <img src={TgButton} alt="tg"/>
                </a>
            </button>
        </>
    );
};

export default Button;