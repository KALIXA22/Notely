import React from 'react';
import CardItem from './CardItem';
import Hero1 from '../assets/images/hero1.png';
import Hero2 from '../assets/images/hero2.png';
import Hero3 from '../assets/images/hero3.jpg';
import Hero4 from '../assets/images/hero4.png';
import './Cards.css';

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Get Started with Notely</h1>
        <p>Start sharing, searching, and succeeding - 
          one note at a time</p>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={Hero1}
                title="Upload your files"
                text="Have class notes and summaries? 
                Upload them by subject, grade, and topic.
                 You can even add titles and descriptions
                  so others can find your notes."
                alt="Person uploading files"
              />
              <CardItem
                src={Hero2}
                title="Create an Account"
                text="Sign up with your name,
                 email, and you're in. Your 
                 dashboard is simple, and 
                 ready for your first upload
                  or download."
                alt="Person creating an account"
              />
              <CardItem
                src={Hero4}
                title="Download files"
                text="Need notes the night
                 before an exam? We got you.
                  Notely lets you search, preview,
                   and download organized notes 
                   from real students."
                alt="Person downloading files"
              />
              <CardItem
                src={Hero3}
                title="Earn badges & points"
                text="The more you share, 
                the more likes and downloads you receive. Level up your contributor badge, gain visibility, and become a go-to resource for other students."
                alt="Person earning badges"
              />
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Cards;