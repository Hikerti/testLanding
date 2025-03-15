import * as React from "react";
import Card from "../../../UI/MainPageUI/Card.tsx";
import Button from "../../../UI/Buttons/Button.tsx";
import BeginerIcon from "../../../../images/icon/MainPageIcon/beginericon.svg"
import ExperienceIcon from "../../../../images/icon/MainPageIcon/experienceicon.svg"

const SectionMainFour: React.FC = () => {
    return (
        <>
            <section className='mt-[140px]'>
                <div className="w-full h-full flex flex-col items-center gap-5">
                    <div className='flex flex-col items-center'>
                        <h2 className='!text-primary-accent'>СКОЛЬКО СТОИТ МЕНТЕРСТВО</h2>
                        <h4 className=''>ТРУДОУСТРОЙСТВО ПОД КЛЮЧ</h4>
                    </div>
                    <div className='flex w-full justify-center gap-10 mt-15'>
                        <Card className='bg-primary-accent px-5 py-10'>
                            <img className='absolute top-[-80px]' src={ExperienceIcon} alt="Beginer"/>
                            <span
                                className='text-primary-accent absolute top-[-20px]
                                border-1 border-primary-accent p-[10px] rounded-[4px] bg-primary-black'
                            >
                                НА ОПЫТЕ
                            </span>
                            <div className='flex flex-col gap-[40px] items-center'>
                                <h4 className='!text-black'>ЕСЛИ У ТЕБЯ ЕСТЬ ЗНАНИЯ В ВЕРСТКЕ JAVASCRIPT'A</h4>
                                <div className='flex flex-col gap-1 items-center'>
                                    <h4 className='!text-primary-black !text-[32px]'>0 &#8381; предоплата</h4>
                                    <span className='w-full h-[1px] bg-primary-black'></span>
                                    <p className='!text-primary-black main-fond-bold'>100% постоплата от оффера</p>
                                </div>
                                <Button className='background-gradient'>СВЯЗАТЬСЯ СО МНОЙ</Button>
                            </div>
                        </Card>
                        <Card className=' bg-primary-accent px-5 py-10'>
                            <img className='absolute top-[-80px]' src={BeginerIcon} alt="Beginer"/>
                            <span
                                className='text-primary-accent absolute top-[-20px]
                                border-1 border-primary-accent p-[10px] rounded-[4px] bg-primary-black'
                            >
                                НОВИЧОК
                            </span>
                            <div className='flex flex-col gap-[40px] items-center'>
                                <h4 className='!text-black'>ЕСЛИ ТЫ НАЧИНАЕШЬ С ПОЛНОГО НУЛЯ</h4>
                                <div className='flex flex-col gap-1 items-center'>
                                    <h4 className='!text-primary-black !text-[32px]'>20 000 &#8381; предоплата</h4>
                                    <span className='w-full h-[1px] bg-primary-black'></span>
                                    <p className='!text-primary-black main-fond-bold'>100% постоплата от оффера</p>
                                </div>
                                <Button className='background-gradient' color='text-white'>СВЯЗАТЬСЯ СО МНОЙ</Button>
                            </div>
                        </Card>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Card className='px-5 py-10' border='border-gradient border-1 rounded-[12px]'>
                            <div className='flex flex-col gap-5 items-center'>
                                <h4 className='!text-primary-accent !text-[26px]'>100% ПОСТОПЛАТАОТ ОФФЕРА - ЧТО ЭТО?</h4>
                                <div className='flex gap-5'>
                                    <p className='w-1/2 text-center'>
                                        Постоплата мотивирует ментора на высокую подготовку, и ментор помогает по рабочим вопросам первые 2 месяца.
                                    </p>
                                    <span className='w-[1px] h-[48px] !bg-gray-gradient'></span>
                                    <p className='w-1/2 text-center'>
                                        Например, устроились на работу с окладом 150 000₽ — 150 000 ₽ выплачиваете в первые 2 месяца. Можно оплачивать в 2 этапа.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SectionMainFour;