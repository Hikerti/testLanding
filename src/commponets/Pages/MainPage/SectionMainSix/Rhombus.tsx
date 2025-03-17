import * as React from "react";
import {RhombusProps} from "../../../../typeTS/MainPageType.ts";

const Rhombus: React.FC<RhombusProps> = ({children, position, positionline, border, afterposition}) => {
    return (
        <div className={`relative flex w-full ${position}`}>
            <div className="flex items-center justify-center w-[200px] h-[200px] border-gradient border-1 rotate-[-45deg]">
                <p className='rotate-[45deg] text-center w-7/10 !text-[14px]'>
                    {children}
                </p>
            </div>
            <div className={`absolute ${positionline} w-[200px] h-[100px] border-gray-gradient ${border} z-[-1] 
            after:content-['ИЛИ'] after:absolute ${afterposition} after:top-[-32px] after:text-[16px] after:text-gray-text`}></div>
        </div>
    );
};

export default Rhombus;