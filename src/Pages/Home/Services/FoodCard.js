import React from 'react';
import { Link } from 'react-router-dom';

const FoodCard = ({ limitedService }) => {
    const { name, img, description, price, rating, _id } = limitedService;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center">
                    {name}
                </h2>
                {
                    description?.length > 100 ?
                        <p>{description.slice(0, 100) + '...'} <Link className='btn btn-outline' to={`/services/${_id}`}>Details</Link></p>
                        :
                        <p>{description}</p>
                }
                <div className="card-actions justify-center">
                    <div className="badge badge-outline">Price: {price} Taka</div>
                    <div className="badge badge-outline">Rating: {rating}</div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;