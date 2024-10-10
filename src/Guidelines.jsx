import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Guidelines = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    { title: 'Preamble', 
    content: 'In an ever-evolving technological landscape, the development of software applications has become an integral part of our daily lives. This course will introudce the students to software development process and helps them to acquire the required technical and soft skills. The course will span across 13 weeks, allowing students to engage in a structured development process (refer Annexure-II). Students will explore the following skills of a software developer' },
    { title: 'Project Team Size', 
    content: 'The project team must have no more than four members. Based on the students abilities and the mentor recommendations, a single discipline or a multidisciplinary project can be assigned to a team.' },
    { title: 'Project Workbook', content: 'Each team member must maintain a project workbook that documents all the work carried out, such as literature collection, surveys, blueprint sheets, results, analysis, and report preparation (Refer Annexure-I).' },
    { title: 'End Semester Assessment', content: 'A team of appointed examiners will conduct the End Semester Assessment.' },
  ];

  const handleToggle = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="course-info">
      <h1 className="course-title"></h1>
      <div className="sections">
        {sections.map((section, index) => (
          <div key={index} className="section">
            <div
              className={`section-title ${activeSection === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {section.title}
            </div>
            <div className={`section-content ${activeSection === index ? 'show' : ''}`}>
              {section.content}
            </div>
          </div>
        ))}
      </div>
      <Link to="/Tasks">
        <button className="btn btn-primary">Go to Tasks</button>
      </Link>
    </div>
  );
};

export default Guidelines;
