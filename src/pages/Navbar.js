
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import LoginModal from './LoginModal'; // Create this component
import SignupModal from './SignupModal'; // Create this component

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Indoor Soccer
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home-section">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#teams-section">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedule-section">Schedule</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-section">Contact</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success text-white" onClick={() => setShowLogin(true)}>Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success text-white" onClick={() => setShowSignup(true)}>Signup</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showLogin && <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />}
      {showSignup && <SignupModal show={showSignup} onClose={() => setShowSignup(false)} />}
    </>
  );
};

export default Navbar;
