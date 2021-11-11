import React from 'react';
import './Service.css'
const Service = () => {
    return (
        <div>
             <section id="services">
          <div className="container">
              <h1>Our Services</h1>
              <div className="row services">
                  <div className="col-md-3 text-center">
                      <div className="icon">
                          <i className="fa fa-user"></i>
                      </div>
                      <h4>HAPPY CLIENTS</h4>
                      <h4>
                         20000 +
                      </h4>
                  </div>
                  <div className="col-md-3 text-center">
                      <div className="icon">
                          <i className="fa fa-truck"></i>
                      </div>
                      <h4>CARS IN STOCK</h4>
                      <h4>
                         200 +
                      </h4>
                  </div>
                  <div className="col-md-3 text-center">
                      <div className="icon">
                          <i className="fa fa-university"></i>
                      </div>
                      <h4>OFFICE IN CITIES</h4>
                      <h4>
                         100 +
                      </h4>
                  </div>
                  <div className="col-md-3 text-center">
                      <div className="icon">
                          <i className="fa fa-car"></i>
                      </div>
                      <h4>New Car</h4>
                      <h4>
                          5000 +
                      </h4>
                  </div>
              </div>
          </div>
      </section>
        </div>
    );
};

export default Service;