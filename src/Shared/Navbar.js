import React from 'react';
import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardProvider';

const Navbar = () => {
    const {sidebarOpen,setSidebarOpen,setDark,showSidebar,setShowSidebar} = useContext(DashboardContext)
   
    return (
        <div className='bg-white dark:bg-dark px-8 py-4 sticky top-0 flex justify-between'>
             {/* dark and light theme toggle button */}
             <div className='border rounded-md border-primary'>
                <button className='p-2 bg-[#0c2556] dark:bg-lightDark text-white rounded-l-md' onClick={()=>setDark(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 dark:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </button>
                <button className='p-2 dark:bg-[#0c2556] dark:text-white rounded-r-md' onClick={()=>setDark(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 dark:text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </button>
            </div>
            <button onClick={()=>setSidebarOpen(!sidebarOpen)} className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8f9fbc" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            {/*menubar for mobile device */}
            <button onClick={()=>setShowSidebar(!showSidebar)} className={`md:hidden`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8f9fbc" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    );
};

export default Navbar;

