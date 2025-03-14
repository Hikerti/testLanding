import Button from "../../UI/Buttons/Button.tsx";

const SectionMainFirst = () => {
    return (
        <>
            <section className='flex items-center
            2xl:h-[840px] xl:h-[720px] lg:h-[600px]'>
                <div className='w-[50%] flex flex-col gap-[40px]'>
                    <h1>
                        <span className='text-primary-accent'>ФРОНТЕНД БЕЗ ВОДЫ:</span><br/>
                        ТОЛЬКО СУТЬ, ТОЛЬКО РЕЗУЛЬТАТ
                    </h1>
                    <p>Добро пожаловать на путь к совершенству в мире Frontend
                        разработки, где каждый шаг будет сопровождаться профессиональной
                        поддержкой и наставлением!
                    </p>
                    <Button>СВЯЗАТЬСЯ СО МНОЙ</Button>
                </div>
            </section>
        </>
    );
};

export default SectionMainFirst;