import * as React from "react";
import {ElementStepProps} from "../../../../typeTS/MainPageType.ts";

const ElementStep: React.FC<ElementStepProps> = ({number, title, sidetitle}) => {
    return (
        <>
            <div className='w-[840px] relative flex flex-col items-center border-gradient rounded-[12px]'>
                <span
                    className='text-primary-accent absolute top-[-20px]
                    border-1 border-primary-accent p-[10px] rounded-[4px] bg-primary-black'
                >
                    {number}
                </span>
                <div className='flex flex-col gap-[20px] items-center mt-[40px]'>
                    <div className='flex flex-col gap-1 items-center'>
                        <h4
                            className='!text-gray-text'
                        >
                            {title}
                        </h4>
                        <h4>
                            {sidetitle}
                        </h4>
                    </div>
                    <button
                        className='text-primary-accent main-fond cursor-pointer mb-[20px] hover:text-[#97CF3C] transition-colors duration-200'
                    >
                        УЗНАТЬ БОЛЬШЕ
                    </button>
                </div>
            </div>
        </>
    );
};

export default ElementStep;