import * as React from "react";
import {CardAdditionalInformationProps} from "../../../../typeTS/MainPageType.ts";
import Button from "../../../UI/Buttons/Button.tsx";

const CardAdditionalInformation: React.FC<CardAdditionalInformationProps> = ({title, description, price, time}) => {
    return (
        <div className='flex h-[550px] flex-1 justify-center background-gradient py-10 px-5 rounded-[20px]'>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <h4 className='!text-primary-accent text-center'>{title}</h4>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='main-fond-bold !text-[32px]'>{price}</p>
                        <span className='w-full h-[1px] bg-gray-text'></span>
                        <p className='p1 !main-fond text-center'>{time}</p>
                    </div>
                    <p className='text-center'>{description}</p>
                </div>
                <Button color='!text-primary-black' size='flex-1'>ЗАПИСАТЬСЯ</Button>
            </div>
        </div>
    );
};

export default CardAdditionalInformation;