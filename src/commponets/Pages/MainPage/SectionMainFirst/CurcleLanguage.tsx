import * as React from "react";
import {CurcleLanguageProps} from "../../../../typeTS/MainPageType.ts";

const CurcleLanguage: React.FC<CurcleLanguageProps> = ({children, size, position, delay}) => {
    return (
        <div className={`absolute flex justify-center items-center rounded-full background-gradient animation__circle z-[-1] ${delay} ${size} ${position}`}>
            <span className='!text-white main-fond-bold !text-[20px]'>{children}</span>
        </div>
    );
};

export default CurcleLanguage;