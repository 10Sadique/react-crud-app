import React from 'react';
import Header from '../../src/components/Header';
import { Outlet } from 'react-router-dom';

const Main = (): JSX.Element => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;
