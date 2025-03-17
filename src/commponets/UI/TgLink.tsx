import TG from "../../images/icon/tgicon.svg";

const TgLink = () => {
    return (
        <a href="#" className='relative z-10 flex items-center gap-3 cursor-pointer'>
            <p className='text-white !text-[14px] main-fond-bold hover:!text-[#2AA2DE] transition-colors duration-200'>
                НАДПИСЬ В ТЕЛЕГРАММ
            </p>
            <img src={TG} alt="logo"/>
        </a>
    );
};

export default TgLink;