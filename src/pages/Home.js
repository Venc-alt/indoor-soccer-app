
import React from 'react';
import soccerImage from '../images/Leonardo.jpg'; 
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container"> {/* Centered and consistent width */}
      <h1>Welcome!</h1>
      <p>Join exciting matches and schedule your team's next game.</p>
      <img src={soccerImage} alt="Indoor Soccer" className="img-fluid" /> {/* Responsive image */}
      <button className="cta-btn">Schedule a Game</button>
    </div>
  );
}

export default Home;


