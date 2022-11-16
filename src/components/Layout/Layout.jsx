import React from 'react';

import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import { Outlet } from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portofolio from '../Portofolio/Portofolio';

const Layout = () => {
    return (
        <>
            <Navbar />
        <div>
            <Outlet/>
                <Hero />
                <Portofolio/>                
                <About />
                <Contact />
           
            </div>
        </>
    );
}

export default Layout;
