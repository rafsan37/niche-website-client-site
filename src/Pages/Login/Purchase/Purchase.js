import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Purchase = () => {
    
        const {serviceId} = useParams();
    const [service, setService] = useState({});
    const {user} = useAuth()

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    console.log(data)
  axios.post('https://ghoulish-skull-44107.herokuapp.com/bookings', data)
  .then(res =>{
if(res.data.insertedId){
 alert('Order processed successfully');
 reset();
}
  })
  };

    useEffect(() => {
        fetch(`https://ghoulish-skull-44107.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div className="text-center my-5">

            <Container className='my-5'>
      <Row>
        <Col>
        <Card style={{width:"350px"}}>
        <Card.Img  variant="top" src={service?.img} />
        <Card.Body >
          <Card.Title>{service?.name}</Card.Title>
          <Card.Text>
            {service?.description}
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
        <Col>
        <div className='text-center add-booking container'>
      <h2>Add a Booking</h2>
      <p>Booking Price:$ {service?.price}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' defaultValue={user?.displayName} readOnly/>
      <input {...register("email", { required: true})} placeholder='Email'
        defaultValue={user?.email} readOnly
      />   
      { service.name && <input {...register("destination", { required: true})} placeholder='Destination'
        defaultValue={service.name} readOnly
      />}
      { service.price &&
        <input {...register("price", { required: true})} 
        defaultValue={service.price}
      />
      }
      <input {...register("Valid Address", { required: true})} placeholder='Address'/>
      <input type="number" {...register("phone",{ required: true})} placeholder='Phone Number'/>
      <input type="text" {...register("Status")} placeholder=''
      defaultValue='Pending' readOnly/>
      
      <input className='bg-warning border-0 py-2 mt-3 rounded' type="submit" value='Place the Booking' />
    </form>
    </div>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Purchase;