import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Purchase.css'

const Purchase = () => {
    
        const {serviceId} = useParams();
    const [product, setProduct] = useState({});
    const {user} = useAuth()

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
  axios.post('https://dry-basin-21190.herokuapp.com/purchases', data)
  .then(res =>{
if(res.data.insertedId){
 alert('Order processed successfully');
 reset();
}
  })
  };

    useEffect(() => {
        fetch(`https://dry-basin-21190.herokuapp.com/products/${serviceId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[])
    return (
      <>
      <Header></Header>
        <div className="text-center my-5">

            <Container className='my-5'>
                
      <Row>
        <Col>
        <h1 className="text-white my-3">.</h1>
        <Card style={{width:"350px"}}>
        <Card.Img  variant="top" src={product?.img} />
        <Card.Body >
          <Card.Title>{product?.name}</Card.Title>
          <Card.Text>
            {product?.description}
          </Card.Text>
          <Card.Text>
           price: {product?.price} Tk
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
        <div className='text-center add-booking container'>
      <h2>Place Your Order</h2>
      <p>Product Price: {product?.price} Tk</p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' defaultValue={user?.displayName} readOnly/>
      <input {...register("email", { required: true})} placeholder='Email'
        defaultValue={user?.email} readOnly
      />   
      { product.name && <input {...register("model", { required: true})} 
        defaultValue={product.name} readOnly
      />}
      { product.price &&
        <input {...register("price", { required: true})} 
        defaultValue={product.price}
      />
      }
      <input {...register("Valid Address", { required: true})} placeholder='Address'/>
      <input type="number" {...register("phone",{ required: true})} placeholder='Phone Number'/>
      <input type="text" {...register("Status")} placeholder=''
      defaultValue='Pending' readOnly/>
      
      <input className='bg-warning border-0 py-2 mt-3 rounded' type="submit" value='Place the Order' />
    </form>
    </div>
        </Col>
      </Row>
    </Container>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Purchase;