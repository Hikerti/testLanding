import MainSectionElement from '../../../images/icon/MainPageIcon/mainsectionsecondelement.svg'
import Circle from "../../UI/MainPageUI/Circle.tsx";
import * as React from "react";

const SectionMainFirst: React.FC = () => {
    return (
        <>
            <section className='flex flex-col justify-between
            2xl:h-[840px] xl:h-[720px] lg:h-[600px]'>
                <div className='flex flex-col justify-between'>
                    <div className='flex h-full gap-6'>
                        <div className='w-[60%] flex flex-col gap-10'>
                            <div className='flex flex-col gap-3'>
                                <h3>ПРИВЕТ, МЕНЯ ЗОВУТ СУЛЕИМАН!</h3>
                                <p className='!text-gray-text'>FRONTEND МЕНТОР</p>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <img src={MainSectionElement} alt="element" width='61' height='56'/>
                                <p>
                                    Помню, как сам не понимал, что нужно сделать, чтобы устроиться на работу.
                                    Я был в замкнутом круге: начинал учиться, бросал и снова возвращался.
                                </p>
                                <p>
                                    Но теперь, пройдя этот путь, я знаю, как его преодолеть. Как опытный фронтенд-разработчик
                                    и ментор, я могу помочь вам избежать этих ошибок.
                                </p>
                                <p>
                                    Я научу вас ключевым навыкам, необходимым для трудоустройства, и покажу, как
                                    эффективно подготовиться к собеседованиям в IT-компаниях. Вместе мы разработаем
                                    чёткий план действий, который приведёт вас к желаемой работе
                                </p>
                            </div>
                        </div>
                        <div className='w-[40%] h-full background-gradient rounded-l-2xl'>

                        </div>
                    </div>
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
                </div>
            </section>
        </>
    );
};

export default SectionMainFirst;