import * as React from "react";
import CardAdvantages from "../SectionMainFour/CardAdvantages.tsx";
import MessageIcon from "../../../../images/icon/MainPageIcon/message.svg"
import EducationBaseIcon from "../../../../images/icon/MainPageIcon/educationbase.svg"
import PeopleIcon from "../../../../images/icon/MainPageIcon/people.svg"

const SectionMainFive: React.FC = () => {
    return (
        <>
            <section className='mt-[140px]'>
                <div className='flex flex-col items-center gap-20'>
                    <h2 className='!text-primary-accent text-center'>ДОПОЛНИТЕЛЬНЫЕ ПРЕЙМУЩЕСТВА</h2>
                    <div className='flex gap-6'>
                        <CardAdvantages
                            title='ОТДЕЛЬНЫЙ ЧАТ ДЛЯ МЕНТИ'
                            sidetitle='Возможность оперативно получать ответы на вопросы и советы от ментора в любое время.'
                        >
                            <img src={MessageIcon} alt="message" />
                        </CardAdvantages>
                        <CardAdvantages
                            title='БАЗА ЗНАНИЙ'
                            sidetitle='Доступ к собранным материалам, учебным пособиям и полезным ресурсам для вашего развития.'
                        >
                            <img src={EducationBaseIcon} alt="educationbase" />
                        </CardAdvantages>
                        <CardAdvantages
                            title='ЗАКРЫТОЕ СООБЩЕСТВО'
                            sidetitle='Сообщество таких же участников, как вы, для обмена опытом, поддержки и совместного роста.'
                        >
                            <img src={PeopleIcon} alt="people" />
                        </CardAdvantages>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionMainFive;