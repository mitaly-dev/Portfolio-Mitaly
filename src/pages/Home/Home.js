import React from 'react';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-lightDark'>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;