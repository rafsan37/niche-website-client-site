import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";


const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://dry-basin-21190.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Review Added successfully");
                    reset();
                }
            })
    };
    return (
        <div className="addservice mb-5 pb-5">
            <h2 className="text-center my-5"> Add Reviews</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Your Name:</h4>    
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <h5>Add your opinion:</h5>
      <textarea {...register("description")} placeholder="Description"/>
      <h4>Add Rating: </h4>
      <input type="number" {...register("rating",{min:1 , max:5})} placeholder='rating 1 to 5' />
      <input className="bg-warning text- fw-bold" type="submit" />
    </form>
    
        </div>
    );
};

export default Reviews;