import * as React from "react";
import TextContent from "./TextContent.tsx";
import CircleMenu from "./CircleMenu.tsx";
import Menu from "./Menu.tsx";

const SectionMainFirst: React.FC = () => {
    return (
        <>
            <section className='flex flex-col justify-between'>
                <div className='flex flex-col justify-between gap-15'>
                    <div className='flex h-full gap-6'>
                        <TextContent/>
                        <Menu/>
                    </div>
                    <CircleMenu/>
                </div>
            </section>
        </>
    );
};

export default SectionMainFirst;