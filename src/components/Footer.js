import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className="footer center box-shadow"> 
        <div className="footer-link"> <Link to="/"> Home </Link> </div>
        <div className="footer-link"> <Link to="/about"> About </Link> </div>
        <div className="footer-link"> Made by Cameron Tharp </div>
        <div className="footer-link"> Taco </div>
    </div>
)

export default Footer;