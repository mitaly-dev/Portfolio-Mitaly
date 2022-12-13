import React from 'react';
import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
    <section className="dark:bg-lightDark dark:text-gray-100  flex items-center px-0 lg:px-10 p-10 md:pb-0">
        <div className="container lg:grid grid-cols-2 mx-auto lg:flex-row items-center ">
           <div data-aos="fade-down">
                <div className="flex flex-col px-6 py-8 space-y-2 rounded-sm sm:p-8 lg:p-12" >
                    <h3 className='font-semibold text-2xl'>About Me</h3>
                        <div className="flex space-x-2 sm:space-x-4">
                            <div className="space-y-2">
                                <p>
                                Hello, I'm Mukta Akter Mitaly. I'm a Full Stack Web Developer. I am experienced in HTMl, CSS, Tailwind CSS, Bootstrap, Javascript, React, React-router-dom, React Hook, React Query, Firebase, JWT, Node.js, Express.js, Mongodb for a long time.
                                </p>
                                <p>
                                    I consider myself as a quick learner,self motivated , responsible,disciplined, and deadline-oriented person who can work under pressure and solve problems in a critical situation with analytical knowledge an the latest technology. 
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='text-yellow font-semibold text-lg space-x-3'>
                                
                            </div>
                        </div>
                </div>
           </div>
            <div className='px-10'>
                <div data-aos="fade-up">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8DK0H5ojoAu7YBxd0J_giT69W9SYLYo6pA&usqp=CAU" alt="project_image" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96 w-full object-cover"  />
                </div>
            </div>
        </div>
    </section>
    );
};

export default About;