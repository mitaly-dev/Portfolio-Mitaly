import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardProvider';
import Dashboard from '../pages/Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import Navbar from '../Shared/Navbar';

const Main = () => {
    const {sidebarOpen,showSidebar} = useContext(DashboardContext)
   
    return (
        <>
        <div className={`min-h-screen bg-body dark:bg-lightDark flex ${showSidebar && "relative"}`}>
            <div>
                <Profile></Profile>
            </div>
            <div className={`flex-1 absolute w-full md:relative`}>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className={`${sidebarOpen ? 'w-[261px]' : 'w-[80px]'} duration-200 absolute inset-y-0 left-0 -translate-x-full md:relative md:translate-x-0 ${showSidebar && 'relative -translate-x-0 z-50'} `}>
            <Dashboard></Dashboard>
            </div>
        </div>
        </>
    );
};

export default Main;