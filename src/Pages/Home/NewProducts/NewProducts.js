import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';


const NewProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dry-basin-21190.herokuapp.com/products')
        .then(res =>  res.json())
        .then(data => setProducts(data.slice(0 , 6)));
    },[])
    return (
        <div className="products">     
            <h1 className="text-center my-5">New Product</h1><br></br>
            <div className="container">
                <div className="row">
                {
                products.map(protuct => <Product key={protuct._id}
                    product={protuct}
                ></Product>)
            }
                </div>
            </div>
        </div>
    );
};

export default NewProducts;