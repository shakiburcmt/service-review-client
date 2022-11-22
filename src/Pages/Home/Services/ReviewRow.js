import React from 'react';

const ReviewRow = ({ review }) => {
    const { name, rating, img, userReview } = review;
    console.log(img)
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {userReview}
            </td>
            <td>
                <img className='w-12 h-12' src={img} alt="" />
            </td>
            <td>
                {rating}
            </td>
        </tr>
    );
};

export default ReviewRow;