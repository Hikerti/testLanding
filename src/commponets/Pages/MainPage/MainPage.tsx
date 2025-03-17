import * as React from "react";
import SectionMainFirst from "./SectionMainFirst/SectionMainFirst.tsx";
import SectionMainSecond from "./SectionMainSecond/SectionMainSecond.tsx";
import SectionMainThird from "./SectionMainThirt/SectionMainThird.tsx";
import SectionMainFour from "./SectionMainFour/SectionMainFour.tsx";
import SectionMainFive from "./SectionMainFive/SectionMainFive.tsx";
import SectionMainSeven from "./SectionMainSeven/SectionMainSeven.tsx";
import SectionMainSix from "./SectionMainSix/SectionMainSix.tsx";

const MainPage: React.FC = () => {
    return (
        <>
            <SectionMainFirst/>
            <SectionMainSecond/>
            <SectionMainThird/>
            <SectionMainFour/>
            <SectionMainFive/>
            <SectionMainSix/>
            <SectionMainSeven/>
        </>
    );
};

export default MainPage;