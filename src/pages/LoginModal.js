import React, { useState } from 'react';
import "../styles/modal.css";

const LoginModal = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // Handle login logic here
    onClose();
  };

  if (!show) return null;

  return (
    <div className="custom-modal modal-backdrop">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <button type="submit" className="btn">Login</button>
        </form>
        <button className="btn-close" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default LoginModal;




// import React, { useState } from 'react';
// import "../styles/modal.css";

// const LoginModal = ({ show, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Login:', { email, password });
//     // Handle login logic here
//     onClose();
//   };
//     // Log the value of 'show' to check if it's true or false
//     console.log('LoginModal show state:', show);

//   if (!show) return null;

//   return (
//     <div className="modal-backdrop custom-modal">
//       <div className="modal-content">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
//           <button type="submit" className="btn">Login</button>
//         </form>
//         <button className="btn-close" onClick={onClose}></button>
//       </div>
//     </div>
//   );
// };

// export default LoginModal;
