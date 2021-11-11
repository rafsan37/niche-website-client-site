import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res =>  res.json())
        .then(data => setProducts(data));
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

export default Products;