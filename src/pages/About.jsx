import React from 'react';
import './About.css';

function About() {
  return (
    <>
    <div className="about-section">
        <div className="about-content">
            <div className="apart-container">
                <p>Upload notes effectively</p>
                <p> Got notes from class, lectures,
                     or your personal study sessions?
                     Upload them in just a few clicks—no complicated steps, no hassle.
                     </p>

            </div>
            <div className="apart-container">
                <p>Download notes easily</p>
                <p>Need notes the night before an exam? We got you.
                     Notely lets you search, preview, 
                     and download organized notes from real 
                     students like you.</p>

            </div>
            <div className="apart-container">
                <p>Connect with others</p>
                <p> Notely isn’t just about files—it's
                     about people.
                     Join a supportive community
                      where learners share, recommend, 
                      and review notes together.
                     </p>

            </div>
        </div>
            <div className="about-containerImages">
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
       
    </div>
    </>
  )
}

export default About;