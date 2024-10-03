import React from 'react';
import '../styles/home.css';
import heroImage from '../images/Leonardo.jpg'; // Replace with your image

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome!</h1>
        <p>Enjoy exciting games and schedule your team’s next match.</p>
        <img src={heroImage} alt="Indoor Soccer" style={{ width: '100%', borderRadius: '8px', marginBottom: '2rem' }} />
        <button className="cta-btn">Schedule a Game</button>
      </div>
    </div>
  );
};

export default Home;
