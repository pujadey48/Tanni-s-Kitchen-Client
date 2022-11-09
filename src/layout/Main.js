import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const main = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           
           
        </div>
    );
};

export default main;