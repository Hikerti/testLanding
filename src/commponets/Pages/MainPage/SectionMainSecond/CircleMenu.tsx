import * as React from "react";
import Circle from "../../../UI/MainPageUI/Circle.tsx";

const CircleMenu: React.FC = () => {
    return (
        <div className='flex items-center justify-center'>
            <Circle
                colorBG = {false}
                border = {true}
                width='342px'
                height='342px'
                position=' translate-x-[20%] relative z-[-1]'
            >
                <div
                    className='flex flex-col gap-2 items-center justify-center'
                >
                    <span className='text-[84px] text-white main-fond-bold'>4</span>
                    <span className='text-white main-fond-bold'>ГОДА</span>
                </div>
                <span className='text-gray-text p2'>опыт в веб разработке</span>
            </Circle>
            <Circle
                colorBG = {true}
                border = {false}
                width='414px'
                height='414px'
            >
                <div
                    className='flex flex-col gap-2 items-center justify-center'
                >
                    <span className='text-[110px] text-white main-fond-bold'>30+</span>
                    <span className='text-white main-fond-bold'>УЧЕНИКОВ</span>
                </div>
                <span className='text-gray-text p1'>за 6 месяцев</span>
            </Circle>
            <Circle
                colorBG = {false}
                border = {true}
                width='342px'
                height='342px'
                position=' translate-x-[-20%] relative z-[-1]'
            >
                <div
                    className='flex flex-col gap-2 items-center justify-center'
                >
                    <div className='text-white text-center main-fond-bold'>
                        <span className='text-[84px] text-white'>150 K</span><br/>
                        <span className='text-[22px]'>&#8381; / МЕС</span>
                    </div>
                </div>
                <span className='text-gray-text p2'>средняя ЗП участников</span>
            </Circle>
        </div>
    );
};

export default CircleMenu;