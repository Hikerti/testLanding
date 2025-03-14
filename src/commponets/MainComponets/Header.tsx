import * as React from "react";
import Logo from "../UI/Logo.tsx";
import TgLink from "../UI/TgLink.tsx";

const Header: React.FC = () => {
    return (
        <header className='h-[92px] flex justify-between items-center border-b-1 border-white'>
            <Logo></Logo>
            <TgLink></TgLink>
        </header>
    );
};

export default Header;