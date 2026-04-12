import React from 'react';
import Nav from '../components/shared/navbar/Nav';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default MainLayout;