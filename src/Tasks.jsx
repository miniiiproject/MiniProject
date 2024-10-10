import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Tasks = () => {
  const [isTask1ModalOpen, setTask1ModalOpen] = useState(false);
  const [isTask2ModalOpen, setTask2ModalOpen] = useState(false);
  const [isTask3ModalOpen, setTask3ModalOpen] = useState(false);


  const openTask1Modal = () => setTask1ModalOpen(true);
  const closeTask1Modal = () => setTask1ModalOpen(false);

  const openTask2Modal = () => setTask2ModalOpen(true);
  const closeTask2Modal = () => setTask2ModalOpen(false);

  const openTask3Modal = () => setTask3ModalOpen(true);
  const closeTask3Modal = () => setTask3ModalOpen(false);

  return (
    <div>
      <div className="tasks">
        <h4>Task 1</h4>
        <ul>
          <li>
            <button onClick={openTask1Modal} className="btn btn-primary">Form a Team</button>
          </li>
        </ul>
      </div>

      {isTask1ModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeTask1Modal}>×</button>
            <h3>Team Formation Form</h3>
            <p>Please fill the form to create your Team.</p>
            <br />
            <a href="https://forms.gle/A3BcR7MBoWCC5qbx7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Form</a>
          </div>
        </div>
      )}

      <div className="tasks">
        <h4>Task 2</h4>
        <ul>
          <li>
            <button onClick={openTask2Modal} className="btn btn-primary">Problem Statement</button>
          </li>
        </ul>
      </div>

      {isTask2ModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeTask2Modal}>×</button>
            <h3>Problem Statement</h3>
            <p>Provide your Problem Statement & Objectives here.</p>
            <br />
            <a href="https://forms.gle/8F2dHyyGomzkz72p7" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Form</a>
          </div>
        </div>
      )}


      <div className="tasks">
        <h4>Task 3</h4>
        <ul>
          <li>
            <button onClick={openTask3Modal} className="btn btn-primary">Feasibility Report</button>
          </li>
        </ul>
      </div>

      {isTask3ModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeTask3Modal}>×</button>
            {/* <h3>Problem Statement</h3> */}
            <p>Provide your Feasibility Study Report.</p>
            <br />
            <a href="https://forms.gle/RWMadcv195smqUTw5" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open Form</a>
          </div>
        </div>
      )}


      <Link to="/Documents">
        <button className="btn btn-primary">Go to Documents</button>
      </Link>
    </div>
  );
};

export default Tasks;
