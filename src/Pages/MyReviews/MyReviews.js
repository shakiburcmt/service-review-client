import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {
    useTitle('MyReviews')
    const { user } = useContext(AuthContext);
    const [reviewsByEmail, setReviewsByEmail] = useState([]);
    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side.vercel.app/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviewsByEmail(data))
    }, [user?.email])

    // delete operation
    const handleDelete = id => {
        const proceed = window.confirm('Want to remove review?');
        if (proceed) {
            fetch(`https://b6a11-service-review-server-side.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = reviewsByEmail.filter(rvw => rvw._id !== id);
                        setReviewsByEmail(remaining)
                    }
                })
        }
    }

    // update review
    const handleUpdateUser = event => {
        event.preventDefault();
        fetch(`https://b6a11-service-review-server-side.vercel.app/reviews/${event}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review Updated')
                    console.log(data)
                }
            })

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl flex justify-center mx-auto">
            {
                reviewsByEmail.map(review => <MyReview
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                    handleUpdateUser={handleUpdateUser}
                ></MyReview>)
            }
        </div>
    );
};

export default MyReviews;