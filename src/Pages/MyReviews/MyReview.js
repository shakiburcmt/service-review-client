import React from 'react';

const MyReview = ({ review, handleDelete, handleUpdateUser }) => {
    const { name, userReview, _id } = review;
    if (review===null) {
        return <p className='text-4xl'>No review were added</p>
    }

    return (
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className='text-lg'>Your Review: {userReview}</p>
            <div className="card-actions justify-between">
                <button onClick={handleUpdateUser} className="btn btn-outline normal-case">Edit Review</button>
                <button onClick={() => handleDelete(_id)}><label className="btn btn-outline normal-case" htmlFor="my-modal-4">Delete Review</label></button>
            </div>
        </div>
    );
};

export default MyReview;