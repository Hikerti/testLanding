import TgPrimary from "../../../../images/icon/MainPageIcon/tgPrimary.svg";
import * as React from "react";

const Menu: React.FC = () => {
    return (
        <div className='w-[45%] h-full background-gradient rounded-[20px] flex justify-end'>
            <div className='flex flex-col w-[32px] items-end gap-20'>
                <img className='mt-10' src={TgPrimary} alt="tgPrimary" width='32' height='32'/>
                <div className='flex flex-col gap-5 mr-[6px]'>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </div>
            </div>
        </div>
    );
};

export default Menu;