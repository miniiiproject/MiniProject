import React from 'react';
import './style.css'; 

const Home = () => {
  return (
    <div>
      <p>15ECSW301: SE and WT Integrated Project</p>
      <img src={`${process.env.PUBLIC_URL}/images/home.jpg`} alt="Home" style={{ width: '90%', height: 'auto' }} />
      <p>In an ever-evolving technological landscape, the development of software applications
has become an integral part of our daily lives. This course will introudce the students to
software development process and helps them to acquire the required technical and soft
skills.</p>
    </div>
  );
};

export default Home;
