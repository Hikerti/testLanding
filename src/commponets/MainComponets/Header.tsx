import * as React from "react";
import Logo from "../UI/Logo.tsx";
import TgLink from "../UI/TgLink.tsx";

const Header: React.FC = () => {
    return (
        <header className='h-[92px] w-full absolute flex justify-between items-center border-b-1 border-white bg-primary-black
        2xl:w-[1260px] xl:w-[1000px] lg:w-[800px]' id='header'>
            <Logo></Logo>
            <TgLink></TgLink>
        </header>
    );
};

export default Header;