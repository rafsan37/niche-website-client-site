import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './MyOrder.css'

const MyOrder = () => {
    
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        fetch('https://dry-basin-21190.herokuapp.com/purchases')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[])

    function cancel(id) {
        const confirmation = window.confirm('Are you sure to delete !')
        if(confirmation) {
          fetch(`https://dry-basin-21190.herokuapp.com/purchases/${id}`,{
          method: "delete",
        })
        .then(res=> res.json())
        .then(data => {
          if(data.deletedCount === 1){
            const remainingOrders = orders.filter(order => order._id !== id)
            setOrders(remainingOrders)
          }else{
            alert("Something went worng");
          }
        })
        }
        
      }

    const myOrders = orders.filter(order => user.email  === order.email)
    return (
        <div className="text-center my-5 container">
        <h1 className="my-5"> Your Order's Status</h1>
    <div className="row">
       { 
         myOrders.map(myOrder => <div className="col-md-4 mx-auto" key={myOrder._id}>
             
            
             
             
             <Card className="my-3" style={{ width: '22rem' }}>
<Card.Body>
<Card.Title><h5>Name : {myOrder.name}</h5></Card.Title>
</Card.Body>
<ListGroup className="list-group-flush">
<ListGroupItem> <h5 className="text-info">Model : {myOrder.model}</h5></ListGroupItem>
<ListGroupItem> <p className="fw-bold text-success">Price: {myOrder.price} Tk</p></ListGroupItem>
<ListGroupItem><p className="text-warning">Order Status : {myOrder.Status}</p></ListGroupItem>
<ListGroupItem><button onClick={()=> cancel(myOrder._id)} className="btn btn-danger rounded">Cancel Order</button></ListGroupItem>
</ListGroup>
</Card>
         </div>)
       }
</div> 
</div>
    );
};

export default MyOrder;