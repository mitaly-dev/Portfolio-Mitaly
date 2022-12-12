import React from 'react';
import profile from '../assets/images/Mitaly.jpg'
import { FaBeer, FaCheck, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DashboardContext } from '../context/DashboardProvider';


const Profile = () => {
    const {
        sidebarOpen,
        setSidebarOpen
    } = useContext(DashboardContext)


    return (
        <div className={`${sidebarOpen && "sticky top-0"}`}>
            <div className="h-full p-3 space-y-2 w-72 dark:bg-dark  dark:text-gray-100 bg-slate-400 min-h-screen ">
            <div className="m-auto p-2 space-x-4 justify-center bg-lightDark py-5 rounded-lg text-center">
                <img src={profile} alt="" className="w-20 h-20 rounded-full dark:bg-gray-500 object-cover m-auto" />
                    <h2 className="text-lg font-semibold mt-4">Mukta Akter Mitaly</h2>
                    <span className="flex items-center space-x-1 justify-center">
                        <p rel="noopener noreferrer" href="#" className="text-[15px] hover:underline dark:text-gray-400">Full Stack Web Developer</p>
                    </span>
            </div>
            <div className="divide-y divide-gray-700">
                <a download={"Resume"} href='https://drive.google.com/file/d/1JdPnwm8h_zLjjZMSeokUHaqo3oiKEShO/view?usp=share_link' className='py-4 px-4 rounded-lg mt-5 flex items-center'>
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                </a>
            </div>
            <div className='mx-4 text-[#7a7a7a;]'>
                <h3 className='mb-3'>Skills</h3>
               
                <div className='mb-2'>
                    <div className='flex'>
                        <FaCheck className='text-yellow mt-1 mr-2 text-xl'></FaCheck>
                        <p>JavaScript, ES6, React.js , React Router, React Query , Rest API , HTML5 , CSS3 , Tailwind CSS , Bootstrap, React Bootstrap</p>
                    </div>
                </div>
                <div className='mb-2' >
                    <div className='flex'>
                        <FaCheck className='text-yellow mt-1 mr-2 '></FaCheck>
                        <p>Node.js, Express.js, MongoDB, Firebase, jwt </p>
                    </div>
                </div>
                <div className='mb-2' >
                Tools:
                    <div className='flex'>
                        <FaCheck className='text-yellow mt-1 mr-2 '></FaCheck>
                        <p> VS Code, Github, Firebase, Netlify, Chrome Dev Tools</p>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-2/4 translate-x-[-50%]'>
                <div className='flex py-3 rounded-lg space-x-5 bg-lightDark justify-center px-14'>
                   <Link> <FaFacebook className='text-gray-400 text-xl'></FaFacebook></Link>
                    <Link><FaTwitter className='text-gray-400 text-xl'></FaTwitter></Link>
                    <Link><FaLinkedin className='text-gray-400 text-xl'></FaLinkedin></Link>
                    <Link><FaInstagram className='text-gray-400 text-xl'></FaInstagram></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;