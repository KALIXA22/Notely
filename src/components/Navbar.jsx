import React,{useState} from 'react';
import Logo from '../assets/images/logoNotely.png'
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar-links">
        <div className="navbar-logo">
          <img src={Logo} alt="" />
          <Link to='/'>Notely</Link> 
        </div>
        <ul className="links">
            <li className="list-items">
                <Link to="/">Home</Link>
            </li>
            <li className="list-items">
                <Link to="/">About Us</Link>
            </li>
            <li className="list-items">
                <Link to="/">Testimonials</Link>
            </li>
            <li className="list-items">
                <Link to="/">Faqs</Link>
            </li>
        </ul>
        <div className="navbar-dropdown">
        </div>
    </nav>    
    </>
  )
}
export default Navbar;