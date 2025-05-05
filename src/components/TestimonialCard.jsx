import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './TestimonialCard.css';

function TestimonialCard(props) {
  const [starStates, setStarStates] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    const newStarStates = starStates.map((state, i) =>
      i <= index ? !starStates[index] : state
    );
    setStarStates(newStarStates);
  };

  return (
    <>
      <div className="testimonialCard">
        <div className="testimonialCard-head">
          <img src={props.src || 'https://via.placeholder.com/40'} alt={`${props.name}'s profile`} />
          <p>{props.name || 'Anonymous'}</p>
        </div>
        <div className="testimonialCard-stars">
          {starStates.map((isFilled, index) => (
            <Star
              key={index}
              className={`star ${isFilled ? 'filled' : ''}`}
              size={20}
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>
        <p className="testimonialCard-text">{props.text || 'No testimonial provided.'}</p>
        <a href={props.readMoreLink || '#'} className="testimonialCard-readmore">
          Read more
        </a>
      </div>
    </>
  );
}
export default TestimonialCard;