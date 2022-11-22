import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const UserReview = () => {
    const { user } = useContext(AuthContext);
    const { _id, name, rating } = useLoaderData();
    useTitle('UserReview')

    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const userReview = form.review.value;

        // send data to db
        const review = {
            service: _id,
            rating,
            name,
            userReview,
            email: user?.email,
            img: user?.photoURL
        }

        fetch('https://b6a11-service-review-server-side.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            {
                user?.email ?
                    <>
                        <form form onSubmit={handleSubmitReview} >
                            <textarea name="review" className="textarea textarea-bordered h-24 w-full mt-2" placeholder="Write your review" required></textarea>
                            <input className='btn btn-outline normal-case' type="submit" value="Submit Review" />
                        </form >
                    </> :
                    <p className='text-3xl text-center font-bold'>Please <Link className='btn btn-outline normal-case' to='/login'>login</Link> to add a review</p>
            }
        </div>
    );
};

export default UserReview;