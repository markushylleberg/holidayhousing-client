import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="about-upper">
        <div className="about-image"></div>
        <div className="about-headline">
          <h4>HOLIDAY HOME</h4>
          <h1>Our hosts and guests are leading the way</h1>
          <a href="#">Read more</a>
        </div>
      </div>
      <div className="about-lower">
        <div>
          <h3>Discrimination has no place on our platform</h3>
          <p>
            From an air mattress in our founders’ apartment to a global
            community of millions, Airbnb is constantly growing, and so is our
            responsibility ...
          </p>
          <a href="#">Read More</a>
        </div>
        <div>
          <h3>Every host should have access to tools for success</h3>
          <p>
            From managing calendars and communication to welcoming guests into
            their homes, our hosts work hard to facilitate amazing travel
            experiences ...
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
