import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { useGetProjectQuery } from '../../Redux/ProjectApi';

const ProjectDetails = () => {
    const location = useLocation()
    const {id} = location.state
    const {data:project,isLoading,error} = useGetProjectQuery(id)
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    if(isLoading){
        return <Spinner></Spinner>
    }
    console.log(project)

    const {liveSite,serverSideLink,clientSideLink,name,picture,picture2,picture3,picture4,description,_id} = project

    return (
      <section className="dark:bg-lightDark dark:text-gray-100 min-h-[100vh]  flex items-center px-10">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row items-center bg-dark">
            <div className="flex flex-col px-6 py-8 space-y-2 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 ">
            <h3 className='font-semibold text-2xl'>{name}</h3>
                <div className="flex space-x-2 sm:space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                    <div className="space-y-2">
                        <h3 className='font-semibold text-xl'>Overview</h3>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                <div>
                    <div className='text-yellow font-semibold text-lg space-x-3'>
                        <a href={liveSite} target='_blank' className="text-yellow">Live Site</a>
                        <a href={clientSideLink} target='_blank'>Client Side</a>
                        <a href={serverSideLink} target='_blank'>Server Side</a>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5">
                <div className="grid grid-cols-2 gap-5 p-4 md:p-5 lg:p-5 items-center">
                    <div>
                        <img src={picture} alt="project_image" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                    <div>
                        <img src={picture2} alt="project_image" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                    <div>
                        <img src={picture3} alt="project_image" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                    <div>
                        <img src={picture4} alt="project_image" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ProjectDetails;