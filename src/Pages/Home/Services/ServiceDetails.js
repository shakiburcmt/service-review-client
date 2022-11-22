import React from 'react';
import useTitle from '../../../hooks/useTitle';
import FoodDescription from './FoodDescription';
import Reviews from './Reviews';
import UserReview from './UserReview';

const ServiceDetails = () => {
    useTitle('ServiceDetails')
    return (
        <div>
            <FoodDescription></FoodDescription>
            <Reviews></Reviews>
            <UserReview></UserReview>
        </div>
    );
};

export default ServiceDetails;