import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Document = () => {
  return (
    <div>
    <div className="tasks">
      <h2>Welcome to the Document Templates Hub!</h2>
      <p>Here you'll find all the essential templates you need to complete your project documentation efficiently </p>

      <ul>
        <li>
          <a href="https://drive.google.com/file/d/1tl7L7nIvFrwX1awN4iYSt-fz2LK8LJKT/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Course Timeline</a><br></br><br></br>
          <a href="https://drive.google.com/file/d/1DsvsPtJgz5z_Fj-tHos2NT-lE36Br-I5/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Feasibility Study Report</a><br></br><br></br>
          <a href='https://drive.google.com/file/d/1TnR3METoN6eX8uLngL-zZyEOQnPlNjZD/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Blue Print Sheet Layout  Potrait</a><br></br><br></br>
          <a href="https://drive.google.com/file/d/1TnR3METoN6eX8uLngL-zZyEOQnPlNjZD/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Blue Print Sheet Layout Landscape</a><br></br><br></br>
          <a href="https://drive.google.com/file/d/1AXHxDt_qF_zSMoxAfRSlSLgth21Mi2ZH/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Paper Template</a><br></br><br></br>
          
        </li>
      </ul>
      </div>
      <Link to="/Coordinator">
        <button className="btn btn-primary">Go to Coordinator</button>
      </Link>
    </div>
  );
};

export default Document;
