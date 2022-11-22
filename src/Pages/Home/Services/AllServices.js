import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import AllServicesFoodCard from './AllServicesFoodCard';

const AllServices = () => {
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                if (loading) {
                    return <button className="btn loading">loading</button>
                }
            })
    }, [loading])
    return (
        <div>
            {
                services.map(service => <AllServicesFoodCard
                    key={service._id}
                    service={service}
                ></AllServicesFoodCard>)
            }
        </div>
    );
};

export default AllServices;