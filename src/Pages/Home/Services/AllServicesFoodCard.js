import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServicesFoodCard = ({ service }) => {
    const { name, img, description, price, rating, _id } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                {
                    description?.length > 100 ?
                        <p>{description.slice(0, 100) + '...'} <Link className='btn btn-outline' to={`/services/${_id}`}>Details</Link></p>
                        :
                        <p>{description}</p>
                }
                <div className="card-actions">
                    <div className="badge badge-outline">Price: {price} Taka</div>
                    <div className="badge badge-outline">Rating: {rating}</div>
                </div>
            </div>
        </div>
    )
};

export default AllServicesFoodCard;