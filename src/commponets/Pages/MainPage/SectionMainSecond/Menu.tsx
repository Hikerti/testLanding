import TgPrimary from "../../../../images/icon/MainPageIcon/tgPrimary.svg";
import * as React from "react";
import RadioButton from "../../../UI/Buttons/RadioButton.tsx";
import {useState} from "react";

const Menu: React.FC = () => {

    const [selectedValue, setSelectedValue] = useState("option1");

    return (
        <div className='w-[45%] flex-1 background-gradient rounded-[20px] flex justify-end'>
            <div className='flex flex-col w-[32px] items-end gap-20'>
                <img className='mt-10' src={TgPrimary} alt="tgPrimary" width='32' height='32'/>
                <div className='flex flex-col gap-5 mr-[6px]'>
                    <RadioButton name="group1" value="option1" checked={selectedValue === "option1"} onChange={setSelectedValue} />
                    <RadioButton name="group1" value="option2" checked={selectedValue === "option2"} onChange={setSelectedValue} />
                    <RadioButton name="group1" value="option3" checked={selectedValue === "option3"} onChange={setSelectedValue} />
                    <RadioButton name="group1" value="option4" checked={selectedValue === "option4"} onChange={setSelectedValue} />
                    <RadioButton name="group1" value="option5" checked={selectedValue === "option5"} onChange={setSelectedValue} />
                </div>
            </div>
        </div>
    );
};

export default Menu;