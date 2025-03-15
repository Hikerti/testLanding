import * as React from "react";
import CardAdditionalInformation from "./CardAdditionalInformation.tsx";
import ButtonGreen from "../../../UI/Buttons/ButtonGreen.tsx";
import Phone from "../../../../images/Iphone14.png"

const SectionMainSeven: React.FC = () => {
    return (
        <>
            <section className='mt-[140px] mb-[80px] w-full'>
                <div className='flex flex-col items-center justify-center gap-[60px]'>
                    <h2 className='!text-primary-accent'>ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ</h2>
                    <div className='flex justify-center gap-6'>
                        <CardAdditionalInformation
                            title='МОК-СОБЕСЕДОВАНИЕ '
                            description='Тренировочное собеседование с разбором ошибок и домашним заданием по
                            закрытию слабых мест в знаниях. Отлично подготовившись, ты получишь уверенность в
                            себе на реальном интервью.'
                            price='5000 ₽'
                            time='Длительность - 1,5 часа'
                        />
                        <CardAdditionalInformation
                            title='РАЗБОР ТВОЕГО РЕЗЮМЕ/ САМОПРЕЗИНТАЦИЯ'
                            description='Ты получаешь мало откликов? Не можешь выгодно рассказать про
                            свой опыт? Это получится исправить в рамках данной консультации. Я заранее
                            ознакомлюсь с твоим резюме и на созвоне придумаем лучшую стратегию самопрезентации.'
                            price='5000 ₽'
                            time='Длительность - 1 часа'
                        />
                        <CardAdditionalInformation
                            title='ПЕРСОНАЛЬНАЯ КАРЬЕРА КОНСУЛЬТАЦИЯ'
                            description='Мы определим твой текущий уровень, разберем твои цели и наметим \
                            четкий план действий. Отвечу на все твои вопросы.'
                            price='4000 ₽'
                            time='Длительность - 1 часа'
                        />
                    </div>
                </div>
                <div className='flex mt-[180px] w-full border-gradient p-[80px] rounded-[20px]'>
                    <div className='flex flex-col gap-10 w-1/2 '>
                        <h2>ОТЗЫВЫ В ТЕЛЕГРАМ</h2>
                        <p className='!m-0 p1' >В этом месте ученики оставляют отзывы со своих личных телеграм-аккаунтов. Всё прозрачно!</p>
                        <p>Ты также можешь оставить свой отзыв после нашего сотрудничества</p>
                        <ButtonGreen color='!text-primary-accent'>СМОТРЕТЬ ВСЕ ОТЗЫВЫ</ButtonGreen>
                    </div>
                    <div className='relative w-1/2 h-full'>
                        <img
                            className='absolute top-[-200px]'
                            src={Phone}
                            alt="Phone"/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionMainSeven;