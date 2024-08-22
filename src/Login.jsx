// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import './style.css';

// const Login = ({ onLogin }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('Submitting formData:', formData);

//     axios.post('http://localhost:8081/login', formData)
//       .then(result => {
//         console.log('Login Response:', result.data);
//         if (result.data.success) {
//           console.log('Login successful.');
//           const role = result.data.role;
//           const userDetails = {
//             username: formData.username,
//             role: role
//           };
//           onLogin(userDetails); 
          
//           switch (role) {
//             case 'committee':
//               navigate('/sidebarCo');
//               break;
//             case 'faculty':
//               navigate('/sidebarFac');
//               break;
//             case 'student':
//               navigate('/sidebarStu');
//               break;
//             default:
//               alert('Unknown role');
//           }
//         } else {
//           setError(result.data.message);
//         }
//       })
//       .catch(err => {
//         console.error('Login Error:', err);
//         setError('Error logging in. Please try again.');
//       });
//   };

//   return (
//     <div className="login-bg">
//       <div className="login-container">
//         <h2 className="mb-4">Login</h2>
//         {error && <div className="alert alert-danger">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="username" className="form-label">Username:</label>
//             <input
//               type="text"
//               name="username"
//               className="form-control"
//               placeholder="Enter your username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password:</label>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-success">Login</button>
//         </form>
//         <p className="mt-3">Don't have an Account? <Link to="/signup">SignUp</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Assuming you have some basic styles

const SimpleLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Just log the data (optional)
    console.log('Login data:', formData);

    // Redirect to home page
    navigate('/home');
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <h2 className="mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username (optional)"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password (optional)"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SimpleLogin;
