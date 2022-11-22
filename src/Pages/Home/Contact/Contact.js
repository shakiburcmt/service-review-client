import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { ImMobile } from 'react-icons/im';
import { TiSocialFacebook } from 'react-icons/ti';

const Contact = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-6xl font-bold mb-5">Contact Details</h1>
                    <div className='flex justify-center items-center mb-3'>
                        <p className='text-3xl'><HiOutlineMail/></p>
                        <p className='text-3xl ml-2'>pkitchen@gmail.com</p>
                    </div>
                    <div className='flex justify-center items-center mb-3'>
                        <p className='text-3xl'><ImMobile/></p>
                        <p className='text-3xl ml-2'>01771148745</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p className='text-3xl'><TiSocialFacebook/></p>
                        <p className='text-3xl ml-2'>programmersKitchen</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;