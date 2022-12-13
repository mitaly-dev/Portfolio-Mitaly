import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DashboardContext } from '../context/DashboardProvider';

const Navbar = () => {
    const {sidebarOpen,setSidebarOpen} = useContext(DashboardContext)
   
    return (
        <div className='bg-white dark:bg-dark px-5 py-0 sticky top-0 flex justify-end md:justify-between z-50'>
            <button onClick={()=>setSidebarOpen(!sidebarOpen)} className="hidden md:block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8f9fbc" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
            </button>
            <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="m-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#8f9fbc" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-white rounded-box w-52 shadow-md shadow-gray-700 z-50 absolute bg-lightDark">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/addProject">Add Project</Link></li>
                    <li>
                        <a download={"Resume"} href='https://drive.google.com/file/d/1JdPnwm8h_zLjjZMSeokUHaqo3oiKEShO/view?usp=share_link' target="_blank" className=' rounded-lg flex items-center'>
                            Download Resume
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </a>        
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

