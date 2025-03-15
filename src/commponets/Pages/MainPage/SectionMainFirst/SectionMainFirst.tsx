import Button from "../../../UI/Buttons/Button.tsx";
import CurcleLanguage from "./CurcleLanguage.tsx";

const SectionMainFirst = () => {
    return (
        <>
            <section className='flex items-center
            2xl:h-[840px] xl:h-[720px] lg:h-[600px]'>
                <div className='w-[55%] flex flex-col gap-[40px]'>
                    <h1>
                        <span className='text-primary-accent '>ФРОНТЕНД БЕЗ ВОДЫ:</span><br/>
                        ТОЛЬКО СУТЬ, ТОЛЬКО РЕЗУЛЬТАТ
                    </h1>
                    <p className='w-[80%]'>Добро пожаловать на путь к совершенству в мире Frontend
                        разработки, где каждый шаг будет сопровождаться профессиональной
                        поддержкой и наставлением!
                    </p>
                    <Button color='!text-primary-black'>СВЯЗАТЬСЯ СО МНОЙ</Button>
                </div>
                <div className='relative flex w-[45%] h-full'>
                    <CurcleLanguage size='w-[148px] h-[148px]' position='left-[calc(50%-74px)] bottom-[36px]'>REDUX</CurcleLanguage>
                    <CurcleLanguage size='w-[160px] h-[160px]' position='bottom-[227px]'>TYPESCRIPT</CurcleLanguage>
                    <CurcleLanguage size='w-[114px] h-[114px]' position='right-[32px] bottom-[295px]'>CSS</CurcleLanguage>
                    <CurcleLanguage size='w-[142px] h-[142px]' position='left-[calc(50%-71px)] bottom-[384px]'>REACT</CurcleLanguage>
                    <CurcleLanguage size='w-[114px] h-[114px]' position='bottom-[590px]'>JS</CurcleLanguage>
                    <CurcleLanguage size='w-[126px] h-[126px]' position='right-[32px] bottom-[662px]'>HTML</CurcleLanguage>
                </div>
            </section>
        </>
    );
};

export default SectionMainFirst;