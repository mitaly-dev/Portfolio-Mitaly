import React from 'react';
import Projects from '../Projects/Projects';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='bg-lightDark'>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;