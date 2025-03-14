import ElementStep from "./ElementStep.tsx";
import * as React from "react";

const SectionMainThird:React.FC = () => {
    return (
        <>
            <section className='flex flex-col mt-[140px]'>
                <h2 className='!text-primary-accent text-center pb-[80px]'>НАШЕ ВЗАИМОДЕЙСТВИЕ</h2>
                <div className='flex flex-col gap-[100px] items-center'>
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
                                className='text-gray-text main-fond-bold cursor-pointer mb-[20px]'
                            >
                                Когда захочешь все бросить, я напомню, зачем ты это начал
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionMainThird;