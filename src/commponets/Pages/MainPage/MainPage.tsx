import * as React from "react";
import SectionMainFirst from "./SectionMainFirst.tsx";
import SectionMainSecond from "./SectionMainSecond/SectionMainSecond.tsx";
import SectionMainThird from "./SectionMainThirt/SectionMainThird.tsx";

const MainPage: React.FC = () => {
    return (
        <>
            <SectionMainFirst/>
            <SectionMainSecond/>
            <SectionMainThird/>
        </>
    );
};

export default MainPage;