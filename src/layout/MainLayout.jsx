import React from 'react';
import Nav from '../components/shared/navbar/Nav';
import { Outlet } from 'react-router';
import Footer from '../components/shared/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;