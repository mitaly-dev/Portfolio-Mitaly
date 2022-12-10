import React from 'react';
import { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import { DashboardContext } from '../../context/DashboardProvider';
import DashboardItem from './DashboardItem';
import { menus } from './data';

const Dashboard = () => {
    const {sidebarOpen, showSidebar,setShowSidebar} = useContext(DashboardContext)
    return (
        <div className='p-4 pt-0 text-white bg-primary dark:bg-dark '>
            <div className='flex items-center justify-between sticky top-0 bg-primary dark:bg-dark pt-5 pb-3 w-full z-50'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" className='w-12 pr-2 '/>
                    <h3 className={`font-semibold text-[19px] font-dmSans tracking-wider ${!sidebarOpen && 'hidden'}`}>
                        Datum
                    </h3>
                </div>
                {/* close btn for responsive */}
                <button onClick={()=>setShowSidebar(!showSidebar)} className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
           <div>
                <ul>
                    <li>home</li>
                    <li>service</li>
                    <li>category</li>
                </ul>
           </div>
        </div>
    );
};

export default Dashboard;