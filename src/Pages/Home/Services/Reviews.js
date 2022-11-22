import React, { useEffect, useState } from 'react';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Food Service Name</th>
                        <th>Review</th>
                        <th>Reviewer Image</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <ReviewRow
                            key={review._id}
                            review={review}
                        ></ReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Reviews;