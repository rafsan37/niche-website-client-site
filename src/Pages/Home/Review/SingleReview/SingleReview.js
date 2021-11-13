import React from 'react';
import ReactStars from "react-rating-stars-component";

const SingleReview = ({review}) => {
    const {name, rating, description } = review;
    return (
        <div className="col-lg-3 col-md-6 col-12">
        <div className="card card-container mt-5 mx-auto " style= {{width: '15rem'}}>
                
            <div className="card-body service">
                <h5 className=" card-title text-info">Name:     {name}</h5>
                <p className=" fs-3 mt-2">says :{description.slice(0, 74)} </p>
                <div className="text-center">
                <p ><ReactStars count={rating}size={24}color="#ffd700"/> </p>
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default SingleReview;