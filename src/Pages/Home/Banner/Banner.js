import React from 'react';
import banner from '../../../assets/images/Programmers Kitchen.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt="" className="max-w-lg mask mask-parallelogram"/>
                <div>
                    <p className='text-2xl text-justify'>Hey PROGRAMMER! Considering the valuable time, I have come up with a food delivery service. Programmer's Kitchen brings you 6 delicious recipes at low prices. The uniqueness of my website is that I have provided recipes along with the food. I prepare the food at home and do home delivery and home delivery charges are absolutely free. The good news is only for you! If you want to eat anything other than these six dishes, you can tell me and I will cook it and deliver it to your door. <span className='font-bold'>Continue coding without any distraction. Happy coding.............</span></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;