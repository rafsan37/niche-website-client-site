import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(()=> {
        fetch('https://dry-basin-21190.herokuapp.com/purchases')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[reload])
    
    function handele(id){
      const confirmation = window.confirm('Are you sure to Confirm !')
      if(confirmation){
        fetch(`https://dry-basin-21190.herokuapp.com/confirmation/${id}`, {
          method: "put",
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount === 1){
            setReload(!reload )
          }
        })
      }
    }
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
    return (
        <div className="container my-5">
            <h1 className="my-3 text-center">Welcome to Admin Panel</h1>
            <h4 className="mt-3 mb-5 text-center">Manage All Orders </h4>

  <div className="table-responsive">
                  <Table striped bordered hover className="table-container" size="sm">
  <thead>
    <tr>
      <th>Email</th>
      <th>Username</th>
      <th>Car Model</th>
      <th>Price</th>
      <th>Status</th>
      <th>Confirm</th>
      <th>Cancellation</th>
    </tr>
  </thead>
  <tbody>
  {
                orders.map(order => <tr key={order._id}>
    
      <td className="py-4">{order.email}</td>
      <td className="py-4">{order.name}</td>
      <td className="py-4">{order.model}</td>
      <td className="py-4  px-3">{order.price} Tk</td>
      <td className="py-4 text-warning  fw-bold">{order.Status}</td>
      <td className="py-0"><button onClick={()=> handele(order._id)} className="btn btn-success rounded"    
      >Confirm</button></td>
      <td className="py-0"><button
      onClick={()=> cancel(order._id)}
      className="btn  btn-danger rounded">Cancel</button></td>
    </tr> 
    )}
  </tbody>
</Table>
                  </div>
               
            
        </div>
    );

};

export default ManageAllOrders;