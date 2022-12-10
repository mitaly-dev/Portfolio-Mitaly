import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardContext } from '../../context/DashboardProvider';

const Submenu = ({menu}) => {
    const {icon,name,path} = menu

    const {
        sidebarOpen,
        setSidebarOpen
    } = useContext(DashboardContext)

    return (
        <li onClick={()=>setSidebarOpen(true)}>
             <NavLink to={path} className={({isActive})=>isActive ? 'text-accent' : 'text-accent'}>
                <div className='px-2 py-2 rounded-md hover:bg-[hsla(0,0%,100%,.08)] hover:text-white flex items-center justify-between duration-200'>
                    {
                    !sidebarOpen ? <span className='m-auto'>{icon}</span> :
                    <div className='flex items-center justify-between'>
                        <span className='mr-4'>{icon}</span>
                        <span className='capitalize text-[14px] font-medium dark:text-white'>{name}</span>
                    </div>
                    }
                </div>
            </NavLink>
        </li>
    );
};

export default Submenu;

