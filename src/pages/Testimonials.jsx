import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import User1 from '../assets/images/user1.png';
import User2 from '../assets/images/user2.png';
import User3 from '../assets/images/user3.png';
import './Testimonials.css';


function Testimonials() {
  return (
    <>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="testimonials__container">
        <div className="testimonials__wrapper">
            <ul className="testimonials__items">
              <TestimonialCard
                src={User1}
                name="John Doe"
                text="I was cramming the night before finals and 
                found exactly I needed on Notely. 
                It felt like someone had my back when 
                I was completely overwhelmed"
                readMoreLink="#"
              />
              <TestimonialCard
                src={User2}
                name="Jane Doe"
                text="I uploaded my study 
                summaries just to help out 
                and people actually thanked me,
                 I didn't realize how valuable my
                  notes were until now"
                readMoreLink="#"
              />
              <TestimonialCard
                src={User3}
                name="James Doe"
                text="We're all struggling to keep up,
                 but Notely made it feel like we're all
                  in it together. It's not just about downloading—it's about giving back"
                readMoreLink="#"
              />
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
}
export default Testimonials;