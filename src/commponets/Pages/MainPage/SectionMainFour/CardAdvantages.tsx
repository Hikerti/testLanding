import * as React from "react";
import {CardAdvantagesProps} from "../../../../typeTS/MainPageType.ts";

const CardAdvantages: React.FC<CardAdvantagesProps> = ({children, title, sidetitle}) => {
    return (
        <div className='flex flex-col items-center gap-10 px-5 py-10 background-gradient rounded-[20px]'>
            {children}
            <div className='flex flex-col items-center gap-5'>
                <p className='main-fond-bold'>{title}</p>
                <p className='p2 !main-fond text-center'>{sidetitle}</p>
            </div>
        </div>
    );
};

export default CardAdvantages;