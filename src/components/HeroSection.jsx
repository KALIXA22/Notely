import React from 'react';
import Button from './Button.jsx';
import './HeroSection.css';
import HeroImage from '../../public/images/heroMain.jpg'

function HeroSection() {
  return (
    <div className="hero-container">
        <div className="hero-image">
            <img src={HeroImage} alt="" backgroundStyle={{}} />
        </div>
        <div className="hero-content">
            <p>Share smartly , <br/> learn better</p>
            <p>Notely lets students upload 
                download and exchange notes 
                with ease No more hoarding
                PDFs or asking last minute 
                for class notes
            </p>
        </div>
       <div className="hero-buttons">
        <Button/>
       </div>
    </div>
  )
}
export default HeroSection;