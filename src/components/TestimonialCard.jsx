import React from 'react';
import { Star } from 'lucide-react'; // For the star icons
import './TestimonialCard.css'; // Create this CSS file

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number; // Number of stars (1-5)
  imageUrl: string; // URL to the user's image
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, rating, imageUrl }) => {
  const stars = Array(5).fill(null); // Create an array for the stars

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <img src={imageUrl} alt={name} className="testimonial-image" />
        <h3 className="testimonial-name">{name}</h3>
      </div>
      <div className="testimonial-stars">
        {stars.map((_, index) => (
          <Star
            key={index}
            className={`star ${index < rating ? 'active' : ''}`}
            size={20} // Adjust size as needed
          />
        ))}
      </div>
      <p className="testimonial-text">{text}</p>
      <a href="#" className="testimonial-link">
        Read more
      </a>
    </div>
  );
};

export default TestimonialCard;
