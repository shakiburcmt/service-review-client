import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDescription = () => {
    const { description, img, name, price, rating } = useLoaderData();
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} alt="" className="rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl">{name}</h1>
                    <p className='text-justify'>{description}</p>
                    <div className='flex gap-2 justify-between'>
                        <p className='font-bold'>Price: {price} Taka</p>
                        <p className='font-bold'>Rating: {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDescription;