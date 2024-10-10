import React, { useState } from 'react';
import './style.css'; 

const Footer = () => {
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);

  const toggleAboutPopup = (e) => {
    e.preventDefault(); 
    setShowAboutPopup(!showAboutPopup);
  };

  const toggleContactPopup = (e) => {
    e.preventDefault(); 
    setShowContactPopup(!showContactPopup);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} AcademicSphere. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="#" onClick={toggleAboutPopup}>About Us</a></li>
          <li><a href="#" onClick={toggleContactPopup}>Contact</a></li>
          <li><a href="/">Privacy Policy</a></li>
        </ul>
      </div>

      {/* About Us Popup */}
      {showAboutPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>About Us</h2>
            <p>Student - Madhura Deepak Yallukar</p>
            <p>Student - Trupti Rajesh Hangirgekar</p>
            <p>KLE Technological University, Belgaum</p>
            <button onClick={toggleAboutPopup} className="close-button">Close</button>
          </div>
        </div>
      )}

      {/* Contact Popup */}
      {showContactPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Contact</h2>
            <p>Email: madhurayallurkar97@gmail.com</p>
            <p>Email: hangirgekartrupti@gmail.com</p>
            
            <button onClick={toggleContactPopup} className="close-button">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
