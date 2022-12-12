import React from 'react';
import banner from '../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="relative font-dmSans z-10">
        <img
          src={banner}
          className="absolute bg-cover inset-0 w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75 min-h-[80vh] z-10">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 mt-20 font-dmSans" >
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Discover my Amazing <br className="hidden md:block" />
                Art Space!
                </h2>
                <p className="max-w-xl mb-4  text-normal text-white md:text-lg">
                <span className='text-yellow'>{'<code>'}</span> Full Stack Web Developer <span className='text-yellow'>{'</code>'}</span>
                </p>
                <button className='bg-yellow px-8 py-3 font-semibold'>
                    Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;