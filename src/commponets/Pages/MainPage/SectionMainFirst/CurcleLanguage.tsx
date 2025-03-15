import * as React from "react";
import {CurcleLanguageProps} from "../../../../typeTS/MainPageType.ts";

const CurcleLanguage: React.FC<CurcleLanguageProps> = ({children, size, position}) => {
    return (
        <div className={`absolute flex justify-center items-center rounded-full background-gradient z-[-1] ${size} ${position}`}>
            <span className='!text-white main-fond-bold !text-[20px]'>{children}</span>
        </div>
    );
};

export default CurcleLanguage;