import React from 'react';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <span className='animate-spin w-20 h-20 border-[5px] border-dashed border-yellow rounded-full'></span>
        </div>
    );
};

export default Spinner;