import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const DashboardContext = createContext()
const DashboardProvider = ({children}) => {
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const [menuName,setMenuName] = useState('')
    const [dark,setDark] = useState(false)
    const [showSidebar,setShowSidebar] = useState(false)
   
    const value = {
        sidebarOpen,
        setSidebarOpen,
        menuName,
        setMenuName,
        dark,setDark,
        showSidebar,setShowSidebar
    }
    return (
        <div>
            <DashboardContext.Provider value={value}>
               {children}
            </DashboardContext.Provider>
        </div>
    );
};

export default DashboardProvider;