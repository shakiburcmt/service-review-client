import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';

const Services = () => {
    const [limitedServices, setLimitedServices] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side.vercel.app/limitedsServices')
            .then(res => res.json())
            .then(data => setLimitedServices(data))
    }, [])
    return (
        <div>
            {
                limitedServices.map(limitedService => <FoodCard
                    key={limitedService._id}
                    limitedService={limitedService}
                ></FoodCard>)
            }
            <Link className='btn btn-outline normal-case' to='/services'>Show All Food Services</Link>
        </div>
    );
};

export default Services;