import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dry-basin-21190.herokuapp.com/products')
        .then(res =>  res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div className="products">
            <Header></Header>
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
            <Footer></Footer>
        </div>
    );
};

export default Products;