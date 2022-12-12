import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const {liveSite,picture,name,description,_id} = project
    const navigate=useNavigate()

    const projectDetailsHandle=()=>{
      navigate("/projectDetails",{state:{id:_id}})
    }
    return (
         <div className="overflow-hidden transition-shadow duration-300 bg-dark text-[#656b74] p-5 pb-2 rounded-lg mb-3">
        <Link href="/" aria-label="Article">
          <img
            src={picture}
            className="object-cover w-full h-64 rounded"
            alt="project"
          />
        </Link>
        <div className="py-5">
          <Link
            href="/"
            aria-label="Article"
            className="inline-block mb-3  transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <p className="text-xl font-bold leading-5 text-white">{name}</p>
          </Link>
          <p className="mb-4 ">
           {description.length>100?description.slice(0,100)+'...':description}
          </p>
         <div className='mt-5 flex justify-between text-yellow '>
            <a href={liveSite} target="_blank" className='font-semibold flex items-center'>Live Preview
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="yellow" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </a>
            <button onClick={projectDetailsHandle} className='flex items-center'>
              Details
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="yellow" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
         </div>
        </div>
      </div>
    );
};

export default Project;