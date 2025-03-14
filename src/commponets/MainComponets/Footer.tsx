import * as React from "react";
import BackUp from '../../images/icon/backup.svg'

const Footer: React.FC = () => {
    return (
        <footer className='relative h-[80px] flex items-center justify-between'>
            <div className="absolute right-0 left-0 bottom-[80px] bg-gradient-to-r from-gray-gradient to-black-gradient h-[1px]"></div>
            <div className='flex w-full justify-between'>
                <p className=''>2024&copy;Suleyman</p>
                <a href="#header">
                    <img src={BackUp} alt="backup" width='40' height='40'/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;