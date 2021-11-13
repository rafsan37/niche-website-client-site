import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import NewProducts from '../NewProducts/NewProducts';
import Service from '../OurService/Service';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <NewProducts></NewProducts>
            <Service></Service>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;