import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import './MangeProducts.css'

const MangeProducts = () => {
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(()=> {
        fetch('https://dry-basin-21190.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[reload])
    
    function cancel(id) {
      const confirmation = window.confirm('Are you sure to delete !')
      if(confirmation) {
        fetch(`https://dry-basin-21190.herokuapp.com/products/${id}`,{
        method: "delete",
      })
      .then(res=> res.json())
      .then(data => {
        if(data.deletedCount === 1){
          const remainingProducts = products.filter(product => product._id !== id)
          setProducts(remainingProducts)
        }else{
          alert("Something went worng");
        }
      })
      }
      
    }
    return (
        <div className="container my-5">
            
            <h2 className="mt-3 mb-5 text-center">Manage All Product </h2>

  <div className="table-responsive">
                  <Table striped bordered hover className="table-container" size="sm">
  <thead>
    <tr>
      <th>Car Model</th>
      <th>Price</th>
      <th>Id</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
  {
                products.map(product => <tr key={product._id}>

      <td className="py-4">{product.name}</td>
      <td className="py-4  px-3">{product.price} Tk</td>
      <td className="py-4 text-warning  fw-bold">{product._id}</td>
      <td className="py-3"><button
      onClick={()=> cancel(product._id)}
      className="btn  btn-danger rounded">Remove</button></td>
    </tr> 
    )}
  </tbody>
</Table>
                  </div>
               
            
        </div>
    );

};

export default MangeProducts;