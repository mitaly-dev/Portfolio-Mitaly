import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardProvider';
import Profile from '../Profile/Profile';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Main = () => {
    const {sidebarOpen,showSidebar} = useContext(DashboardContext)
   
    return (
        <>
        <div className={`min-h-screen bg-body dark:bg-lightDark flex ${showSidebar && "relative"}`}>
            <div className={`${sidebarOpen ? 'w-[288px]' : 'w-0'} duration-200 absolute inset-y-0 left-0 -translate-x-full md:relative md:translate-x-0 ${showSidebar && 'relative -translate-x-0 z-50'} `}>
            <Profile></Profile>
            </div>
            <div className={`flex-1 absolute w-full md:relative bg-lightDark`}>
                <Navbar></Navbar>
                <div className={``}>
                <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
        </>
    );
};

export default Main;