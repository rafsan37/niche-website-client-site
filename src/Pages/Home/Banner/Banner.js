import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-highlights">
                    <div className="container ">
                        <div className="row d-flex justify-content-around">
                            <div className="col-md-8">
                                <h2>Get 30% on top destination</h2>
                                <p>Buy your cars before 21st november and avail 30% flat discount</p> 
                            </div>
                            <div className="col-md-4 ">
                             <button type='button' className="explore-btn">Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;