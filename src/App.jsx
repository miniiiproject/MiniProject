// // src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Navbar from './navbar'; 
import Home from './Home'; 
import TeamForm from './TeamForm';
import Guidelines from './Guidelines';
import Document from './Document';
// import Contact from './Contact';
import './App.css'; // Import your CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Include the Navbar component */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/TeamForm" element={<TeamForm />} />
            <Route path="/Guidelines" element={<Guidelines />} />
            <Route path='/Documents' element={<Document />}/>

            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './Login.jsx';
// import SignUp from './SignUp.jsx';

// const Header = ({ username, role }) => (
//   <header>
//     <h1>Welcome, {username} ({role})</h1>
//     {/* Add more header content here */}
//   </header>
// );

// const Guide = () => (
//   <div>
//     <h2>Guide Dashboard</h2>
//     {/* Add Guide content here */}
//   </div>
// );

// const Student = () => (
//   <div>
//     <h2>Student Dashboard</h2>
//     {/* Add Student content here */}
//   </div>
// );

// const Committee = () => (
//   <div>
//     <h2>Committee Dashboard</h2>
//     {/* Add Committee content here */}
//   </div>
// );

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState({ username: '', role: '' });

//   const handleLogin = (userDetails) => {
//     setIsAuthenticated(true);
//     setUser(userDetails);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setUser({ username: '', role: '' });
//   };

//   return (
//     <div className="App">
//       <Router>
//         {isAuthenticated && <Header username={user.username} role={user.role} />}
        
//         <div className="main-content">
//           {isAuthenticated && user.role === 'guide' && <Guide />}
//           {isAuthenticated && user.role === 'student' && <Student />}
//           {isAuthenticated && user.role === 'committee' && <Committee />}
          
//           <div className="content-area">
//             <Routes>
//               <Route path="/" element={<Login onLogin={handleLogin} />} />
//               <Route path="/signup" element={<SignUp />} />
//               <Route path="/login" element={<Login onLogin={handleLogin} />} />

//               {isAuthenticated && user.role === 'guide' && (
//                 <>
//                   {/* Add your guide routes here */}
//                 </>
//               )}

//               {isAuthenticated && user.role === 'student' && (
//                 <> 
//                   {/* Add your student routes here */}
//                 </>
//               )}

//               {isAuthenticated && user.role === 'committee' && (
//                 <>
//                   {/* Add your committee routes here */}
//                 </>
//               )}

//               {!isAuthenticated && <Route path="*" element={<Navigate to="/login" replace />} />}
//             </Routes>
//           </div>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
