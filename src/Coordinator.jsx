import React from 'react';
// import './style.css';

const Coordinator = () => {
  return (
    <div className="coordinator-container">
      <div className="photo-section">
        
          <img src={`${process.env.PUBLIC_URL}/images/Dr.-Santosh-Pattar.jpg`} alt="Home" style={{ width: '90%', height: 'auto' }} />
          
      </div>
      <div className="info-section">
        <h2>Dr. Santosh Pattar</h2>
        <p>
        Assistant Professor

Department of Computer Science and Engineering

        </p>
      </div>
    </div>
  );
};

export default Coordinator;
