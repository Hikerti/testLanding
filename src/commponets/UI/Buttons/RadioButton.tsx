import * as React from "react";
import {RadioButtonProps} from "../../../typeTS/MainPageType.ts";

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, checked, onChange}) => {


    return (
        <>
            <label className="relative flex items-center justify-center">
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={() => onChange && onChange(value)}
                    className="absolute w-[20px] h-[20px] opacity-0 cursor-pointer"
                />
                <span
                    className={` border-1 rounded-full flex items-center justify-center transition-colors
                    ${checked ? "w-[20px] h-[20px] border-primary-accent" : "w-[7px] h-[7px] bg-primary-black"}`}
                >
                    {checked && <span className="w-[10px] h-[10px] bg-primary-accent rounded-full"></span>}
                </span>
            </label>
        </>
    );
};

export default RadioButton;