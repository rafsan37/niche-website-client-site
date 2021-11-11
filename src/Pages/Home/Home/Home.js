import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../OurService/Service';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Service></Service>
        </div>
    );
};

export default Home;