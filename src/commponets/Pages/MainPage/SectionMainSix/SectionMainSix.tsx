import * as React from "react";
import Rhombus from "./Rhombus.tsx";
import CircleShadow from "../../../UI/MainPageUI/CircleShadow.tsx";
import Comfitty from "../../../../images/icon/MainPageIcon/comfitty.svg"

const SectionMainSix: React.FC = () => {
    return (
        <>
            <section className='relative mt-[140px] flex flex-col items-center justify-center'>
                <h2 className='text-center'>ОТВЕТЬ ЧЕСТНО НА НЕСКОЛЬКО<br/> ВОПРОСОВ</h2>
                <div className='flex flex-col items-center mt-20 w-6/10'>
                    <Rhombus
                        position='justify-center'
                        positionline='left-25 bottom-0'
                        border='border-t-2 border-l-2'
                        afterposition='after:left-[55px]'
                    >
                        Ты хочешь найти первую работу или увеличить свою зарплату?
                    </Rhombus>
                    <Rhombus
                        position='justify-start'
                        positionline='left-45 bottom-0'
                        border='border-t-2 border-r-2'
                        afterposition='after:right-[55px]'
                    >
                        У тебя нет чёткого плана как достичь своей цели, не понимаешь,
                        что нужно сделать, чтобы устроиться на работу?
                    </Rhombus>
                    <Rhombus
                        position='justify-center'
                        positionline='right-25 bottom-0'
                        border='border-t-2 border-r-2'
                        afterposition='after:right-[55px]'
                    >
                        Надоело учиться, потом бросать и снова возвращаться, быть в этом замкнутом круге?
                    </Rhombus>
                    <Rhombus
                        position='justify-end'
                        positionline='right-45 bottom-0'
                        border='border-t-2 border-l-2'
                        afterposition='after:left-[55px]'
                    >
                        Есть проблемы с резюме, позиционированием себя, прохождением собеседований?
                    </Rhombus>
                    <div className='relative w-full'>
                        <Rhombus
                            position='justify-center'
                            afterposition="after:opacity-0"
                        >
                            Ты думаешь что ментор всё выполнит за тебя и тебе не придётся работать и преодолевать себя?
                        </Rhombus>
                        <div className='w-full h-full'>
                            <div
                                className="top-[100px] right-[100px] absolute w-[150px] h-[50px] border-red-accent z-[-1] border-t-2 border-r-2
                                after:content-['ДА'] after:absolute after:right-10 after:top-[-32px] after:text-[16px] after:text-red-accent">
                            </div>
                        </div>
                        <div>
                            <div
                                className="top-[100px] left-[95px] absolute w-[150px] h-[50px] border-primary-accent z-[-1] border-t-2 border-l-2
                                after:content-['НЕТ'] after:absolute after:left-10 after:top-[-32px] after:text-[16px] after:text-primary-accent">
                            </div>
                        </div>
                        <div className='flex justify-between w-full mt-[-50px]'>
                            <div className='inline-flex flex-col items-center bg-primary-accent gap-[10px] p-5 rounded-[8px]'>
                                <img src={Comfitty} alt="comfitty"/>
                                <p className='w-[150px] text-center !text-primary-black main-fond-bold'>Поздравляю, мы <br/> сработаемся!</p>
                            </div>
                            <div className='inline-flex h-fit flex-col items-center bg-transparent border-1 border-red-accent p-5 rounded-[8px]'>
                                <p className='w-[150px] text-center !text-red-accent'>Тебе не подойдут мои услуги</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CircleShadow position=' left-[-20%] top-[10%]'/>
                <CircleShadow position=' right-[-20%] bottom-[10%]'/>
            </section>
        </>
    );
};

export default SectionMainSix;