import React, { useEffect, useState } from 'react';

const Review = () => {
    const {reviews, setReviews} = useState([]);
    useEffect(() => {
        fetch('https://dry-basin-21190.herokuapp.com/reviews')
        .then(res =>  res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div>
            
                {
                reviews.map(review => <div key={review._id}></div>)
            }
               
        </div>
    );
};

export default Review;