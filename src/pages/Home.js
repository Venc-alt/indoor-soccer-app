// import React from 'react';
// import '../styles/home.css';
// import heroImage from '../images/Leonardo.jpg'; // Replace with your image

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="home-content">
//         <h1>Welcome!</h1>
//         <p>Enjoy exciting games and schedule your team’s next match.</p>
//         <img src={heroImage} alt="Indoor Soccer" style={{ width: '100%', borderRadius: '8px', marginBottom: '2rem' }} />
//         <button className="cta-btn">Schedule a Game</button>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import soccerImage from '../images/Leonardo.jpg'; 
import '../styles/home.css';

const Home = () => {
  return (
    <div className="container home-container"> {/* Bootstrap container */}
      <div className="row align-items-center"> {/* Align vertically */}
        <div className="col-md-6 order-md-1"> {/* 50% width on medium screens and above */}
          <h1>Welcome to Indoor Soccer</h1>
          <p>Join us for exciting matches and fun indoor soccer games with local teams.</p>
        </div>
        <div className="col-md-6 order-md-2"> {/* 50% width on medium screens and above */}
          <img src={soccerImage} alt="Indoor Soccer" className="img-fluid" /> {/* Responsive image */}
        </div>
      </div>
    </div>
  );
}

export default Home;


