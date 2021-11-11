import React from 'react';
import './Footer.css'
import logo from '../../../img/icon/logo.png'


const Footer = () => {
    return (
        <div>
            <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4><img src={logo} alt="" /></h4>
  	 			<ul>
  	 				<li><a href="/">about us</a></li>
  	 				<li><a href="/">our services</a></li>
  	 				<li><a href="/">privacy policy</a></li>
  	 				<li><a href="/">Contact Us</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="/">FAQ</a></li>
  	 				<li><a href="/">returns</a></li>
  	 				<li><a href="/">payment options</a></li>
  	 			</ul>
  	 		</div>
               <div className="footer-col">
  	 			<h4>Other page</h4>
  	 			<ul>
  	 				<li><a href="/">Blog</a></li>
  	 				<li><a href="/">Blog Details</a></li>
  	 				<li><a href="/">page1</a></li>
  	 				<li><a href="/">page2</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="/"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i className="fab fa-twitter"></i></a>
  	 				<a href="/"><i className="fab fa-instagram"></i></a>
  	 				<a href="/"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </div>
    );
};

export default Footer;