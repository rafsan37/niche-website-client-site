import React from 'react';
import { useForm } from 'react-hook-form';
import './Addproduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
          console.log(data);
  
          fetch('https://dry-basin-21190.herokuapp.com/products', {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            reset()
          }
          
        })  
              
      }
    return (
        <div className="addservice mb-5 pb-5">
            <h2 className="text-center my-5"> Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
          <h4>Product Name:</h4>    
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
      <h5>Add Description:</h5>
      <textarea {...register("description")} placeholder="Description"/>
      <h4>Add Price $: </h4>
      <input type="number" {...register("price")} placeholder='price' />
      <h4>Give a img url:</h4>
      <input {...register("img")} placeholder="img url" />
      <input className="bg-warning text- fw-bold" type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;