import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';

const Review = () => {
    const [ reviews, setReviews ] = useState([]);
    useEffect(() => {
        fetch('https://dry-basin-21190.herokuapp.com/reviews')
        .then(res =>  res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div className="container">
            <h1 className="text-center my-5 text-warning">Our client reviews</h1>
               <div className="row">
               {
                reviews?.map(review => <SingleReview key={review._id}
                    review={review}
                >     
                </SingleReview>)
            }
               </div>
               
        </div>
    );
};

export default Review;