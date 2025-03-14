import * as React from "react";
import Circle from "../../../UI/MainPageUI/Circle.tsx";

const CircleMenu: React.FC = () => {
    return (
        <div>
            <Circle
                colorBG='linear-gradient(to bottom, #4B4C49, #21221E)'
                border='none'>
                <div
                    className='flex flex-col gap-2 items-center justify-center'
                >
                    <span className='text-[110px] text-white main-fond-bold'>30+</span>
                    <span className='text-white main-fond-bold'>УЧЕНИКОВ</span>
                </div>
                <span className='text-gray-text p1'>за 6 месяцев</span>
            </Circle>
        </div>
    );
};

export default CircleMenu;