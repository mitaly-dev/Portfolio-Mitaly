import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../../components/Spinner';
import { DashboardContext } from '../../context/DashboardProvider';
import { useGetProjectsQuery } from '../../Redux/ProjectApi';
import Project from './Project';

const Projects = () => {
    const {data:projects,isLoading,error} = useGetProjectsQuery()
    const {sidebarOpen,setSidebarOpen} = useContext(DashboardContext)
 
    if(isLoading){
        return <Spinner></Spinner>
    }
    
    console.log(projects)
    return (
        <div className='my-16 px-5 sm:px-10 font-dmSans'>
            <h3 className='text-center text-2xl font-semibold text-white mb-7'>Projects</h3>
            <div className={`sm:grid lg:grid-cols-3 gap-6 ${sidebarOpen? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
            {
                projects.map(project=><Project project={project} key={project.index}></Project>)
            }
            </div>
        </div>
    );
};

export default Projects;