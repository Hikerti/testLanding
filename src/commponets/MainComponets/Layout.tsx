import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import * as React from "react";

const Layout: React.FC = () => {
    return (
        <div className='flex flex-col justify-between w-full
            2xl:w-[1260px] xl:w-[1000px] lg:w-[800px]
        '>
            <Header></Header>
            <main>
                <Outlet />
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;