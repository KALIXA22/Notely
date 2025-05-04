import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import HeroImage from '../assets/images/heroMain.jpg';

function HeroSection() {
  return (
    <div className="hero-container">
        <div className="hero-image">
            <img src={HeroImage} alt=""/>
        </div>
        <div className="hero-content">
            <p className='hero-content-title'>Share smartly,<br/>learn better</p>
            <p>Notely lets students upload 
                download and exchange <br /> notes 
                with ease.  No more hoarding
                PDFs or asking <br /> last minute 
                for class notes.
            </p>
            <div className="hero-buttons">
            <Link to="/signup"> {/* Use Link for navigation */}
            <button className="get-started-button">Get Started</button>
      </Link>
      <Link to="/login">    {/* Use Link for navigation */}
        <button className="login-button">Login</button>
      </Link>
       </div>
        </div>
      
    </div>
  )
};
export default HeroSection;