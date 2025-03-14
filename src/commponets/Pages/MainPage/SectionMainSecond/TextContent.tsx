import MainSectionElement from "../../../../images/icon/MainPageIcon/mainsectionsecondelement.svg";
import * as React from "react";

const TextContent: React.FC = () => {
    return (
        <div className='w-[55%] flex flex-col gap-10'>
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
    );
};

export default TextContent;