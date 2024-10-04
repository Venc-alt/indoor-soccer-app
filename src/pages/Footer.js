
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; 2024 Indoor Soccer App. All rights reserved.</p>
      <div className="footer-links">
        <a href="#teams">Teams</a>
        <a href="#schedule">Schedule</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
