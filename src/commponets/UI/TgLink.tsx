import TG from "../../images/icon/tgicon.svg";

const TgLink = () => {
    return (
        <a href="#" className='flex items-center h-full gap-3'>
                <span className='text-white text-[14px] main-fond'>
                    НАДПИСЬ В ТЕЛЕГРАММ
                </span>
            <img src={TG} alt="logo"/>
        </a>
    );
};

export default TgLink;