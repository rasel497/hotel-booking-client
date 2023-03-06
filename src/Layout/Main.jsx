import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../componant/Shared/Footer/Footer';
import Navbar from '../componant/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;