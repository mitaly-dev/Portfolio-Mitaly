import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_r3rjko7', 'template_8p4rx9x', form.current, 'NHlbkKSCBL9Ir4o7d')
        .then((result) => {
            console.log(result.text);
            toast.success('successfull',{duration:1500})
            e.target.reset()
            
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
    <div className='bg-dark w-full min-h-screen font-dmSans'>
        <div className='w-full lg:w-7/12 p-10 text-white m-auto py-16'>
            <h3 className='text-lg mb-4'>Get In Touch</h3>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col ">
                <label>Name</label>
                <input type="text" name="user_name" className='rounded-md py-2 mb-2  bg-lightDark mt-2' />
                <label>Email</label>
                <input type="email" name="user_email" className='rounded-md py-2 mb-2   bg-lightDark mt-2'/>
                <label>Message</label>
                <textarea name="message" className=' bg-lightDark mt-2'/>
                <input type="submit" value="Send" className='rounded-md py-3 mt-2 bg-yellow cursor-pointer font-semibold text-black'/>
            </form>
        </div>
    </div>
    );
};

export default Contact;