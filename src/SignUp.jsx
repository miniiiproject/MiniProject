import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'faculty',
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/signup/getAll')
      .then(response => {
        console.log('Fetched Users:', response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleChange = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    console.log('Form Data:', JSON.stringify(newFormData, null, 2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Form Data:', JSON.stringify(formData, null, 2));

    axios.post('http://localhost:8081/signup/add', formData)
      .then(result => {
        console.log('Registration Response:', result.data);

        if (result.data.success) {
          alert('Registered successfully');
          navigate('/');
          setFormData({
            username: '',
            password: '',
            email: '',
            role: 'faculty',
          });
        } else {
          alert('Registration failed: ' + result.data.message);
        }
      })
      .catch(err => {
        console.error('Registration Error:', err);
        alert('Error during registration. Please try again.');
      });
  };

  return (
    <div className="bg-signup">
      <div className="signup-container">
        <h2 className='sign'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Your name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-control"
            >
              <option value="committee">Committee</option>
              <option value="guide">Guide</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success">Signup</button>
        </form>
        <p className="mt-3">Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
