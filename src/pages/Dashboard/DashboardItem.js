import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardContext } from '../../context/DashboardProvider';
import Submenu from './Submenu';

const DashboardItem = ({menu}) => {
    const {
        sidebarOpen,
        setSidebarOpen,
        menuName,
        setMenuName
    } = useContext(DashboardContext)
   
   
//   handle submenu event
    const handleSubMenu=(name)=>{
        if(menuName===name){
            setMenuName('')
        }
        else{
            setMenuName(name)
        }
    }
   
    return (
        <div className={`text-accent`}>
            {
            menu.title && 
            <h3 className={`uppercase font-semibold text-[14px] py-3 ${!sidebarOpen && 'hidden'}`}>{menu.title}</h3>
            }
            <ul>
                {
                menu.data.map((item,index)=>{
                    const {icon,name,path,badge,calenderBadge,submenu} = item

            return  <li key={index} onClick={()=>submenu || setSidebarOpen(true)}>
                        <NavLink to={path} className={({isActive})=>isActive ? 'text-accent' : 'text-accent'}>
                            <div onClick={()=>submenu && handleSubMenu(name)} 
                            className='px-3 py-2 rounded-md hover:bg-[hsla(0,0%,100%,.08)] hover:text-white flex items-center justify-between duration-200'>
                                {
                                    !sidebarOpen ? <span className='m-auto'>{icon}</span> :
                                <>
                                    <div className='flex items-center justify-between'>
                                        <span className='mr-4'>{icon}</span>
                                        <span className='capitalize text-[14px] font-medium dark:text-white'>{name}</span>
                                    </div>
                                    {
                                        badge && <small className='bg-[#3378ff] px-2 font-semibold text-[11px] text-white rounded-full'>{badge}</small>
                                    }
                                    {
                                        calenderBadge && <small className='bg-[#3cb72c] capitalize px-2 font-semibold text-[11px] text-white rounded-full'>{calenderBadge}</small>
                                    }
                                    {
                                        submenu && 
                                    <>
                                        <button className={`${menuName===name && 'rotate-90'} duration-200`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </button>
                                    </>   
                                    }
                                 </>
                                }
                            </div>
                        </NavLink>

                        {/*---------- submenu ---------*/}

                        {
                        submenu &&
                        <ul className={`pl-5 ${(menuName!==name) && 'hidden'}`}>
                        {
                            submenu.map((menu,index)=><Submenu key={index} menu={menu}></Submenu>)
                        }
                        </ul>
                        }
                    </li>
                   })
                }
            </ul>
        </div>
    );
};

export default DashboardItem;

