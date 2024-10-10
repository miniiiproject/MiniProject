import React from 'react';
import './style.css'; 
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='home-container'>
      <p>15ECSW301: Mini Project</p>
      <img src={`${process.env.PUBLIC_URL}/images/home.jpg`} alt="Home" style={{ width: '90%', height: 'auto' }} />
      <p>In an ever-evolving technological landscape, the development of software applications
has become an integral part of our daily lives. This course will introudce the students to
software development process and helps them to acquire the required technical and soft
skills.</p>
      <Link to="/Guidelines">
        <button className="btn btn-primary">Go to Guidelines</button>
      </Link>
<br></br>
    </div>
  );
};

export default Home;
