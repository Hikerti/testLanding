import ElementStep from "./ElementStep.tsx";
import * as React from "react";
import CircleShadow from "../../../UI/MainPageUI/CircleShadow.tsx";

const SectionMainThird:React.FC = () => {
    return (
        <>
            <section className='relative flex flex-col mt-[140px]'>
                <h2 className='!text-primary-accent text-center pb-[80px]'>НАШЕ ВЗАИМОДЕЙСТВИЕ</h2>
                <div className='relative flex flex-col gap-[100px] items-center'>
                    <ElementStep
                        number='01'
                        title='СТАРТ'
                        sidetitle='ЗНАКОМСТВО НА ПЕРВОМ БЕСПЛАТНОМ СОЗВОНЕ'
                    />
                    <ElementStep
                        number='02'
                        title='ПРОГРАММА'
                        sidetitle='ПРЕДОСТАВЛЕНИЕ ROUDMAP ДЛЯ ОБУЧЕНИЯ'
                    />
                    <ElementStep
                        number='03'
                        title='МАТЕРИАЛЫ'
                        sidetitle='ДОСТУП К ЗАКРЫТОМУ СООБЩЕСТВУ И ПОЛЕЗНОСТЯМ'
                    />
                    <ElementStep
                        number='04'
                        title='РЫНОК IT'
                        sidetitle='ПОДГОТОВКА К СОБЕСЕДОВАНИЮ'
                    />
                    <ElementStep
                        number='05'
                        title='ПОДГОТОВКА К СОБЕСЕДОВАНИЮ'
                        sidetitle='ПОМОЩЬ В ТРУДОУСТРОЙСТВЕ'
                    />
                    <div className='w-[840px] relative flex flex-col items-center rounded-[12px] background-gradient'>
                        <span
                            className='text-primary-accent absolute top-[-20px]
                            border-1 border-primary-accent p-[10px] rounded-[4px] bg-primary-black'
                        >
                            БОНУС
                        </span>
                        <div className='flex flex-col gap-[20px] items-center mt-[40px]'>
                            <div className='flex flex-col gap-1 items-center'>
                                <h4>
                                    ПИНКИ МОТИВАЦИЯ
                                </h4>
                            </div>
                            <button
                                className='text-gray-text main-fond-bold cursor-pointer mb-[40px]'
                            >
                                Когда захочешь все бросить, я напомню, зачем ты это начал
                            </button>
                        </div>
                    </div>
                    <span
                        className="absolute z-[-1] h-full w-[1px] border-none"
                        style={{
                        backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 20px, #BFF764 10px, #BFF764 40px)"}}
                    >
                    </span>
                </div>
                <CircleShadow position=' left-[-20%] top-[10%]'/>
                <CircleShadow position=' right-[-20%] bottom-[10%]'/>
            </section>
        </>
    );
};

export default SectionMainThird;