import React from 'react';
import './About.css';
import AboutImage1 from '../assets/images/hero4.png';
import AboutImage2 from '../assets/images/hero6.png';
import AboutImage3 from '../assets/images/hero1.png';
function About() {
  return (
    <>
    <div className="about-section">
    <p className='title'>Why use Notely?</p>
        <div className="about-content">
            <div className="apart-container">
                <p className='about-title'>Upload notes effectively</p>
                <p className='about-text'> Got notes from class, lectures,
                     or your personal study sessions?
                     Upload them in just a few clicks—no complicated steps, no hassle.
                     </p>
                     <img src={AboutImage1} alt="" />
            </div>
            <div className="apart-container">
                <p className='about-title'>Download notes easily</p>
                <p className='about-text'>Need notes the night before an exam? We got you.
                     Notely lets you search, preview, 
                     and download organized notes from real 
                     students like you.</p>
                 <img src={AboutImage2} alt="" />
                     
                   

            </div>
            <div className="apart-container">
                <p className='about-title'>Connect with others</p>
                <p className='about-text'> Notely isn’t just about files—it's
                     about people.
                     Join a supportive community
                      where learners share, recommend, 
                      and review notes together.
                     </p>
                     <img src={AboutImage3} alt="" />
            </div>
        </div>
       
    </div>
    </>
  )
}

export default About;