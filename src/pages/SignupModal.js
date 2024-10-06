import React, { useState } from 'react';
import "../styles/modal.css";

const SignupModal = ({ show, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signup:', { email, password });
    // Handle signup logic here
    onClose();
  };

  if (!show) return null;

  return (
    <div className="custom-modal modal-backdrop">
      <div className="modal-content">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          
          <button type="submit" className="btn">Signup</button>
        </form>
        <button className="btn-close" onClick={onClose}></button>
      </div>
    </div>
  );
};

export default SignupModal;



// import React, { useState } from 'react';
// import "../styles/modal.css";

// const SignupModal = ({ show, onClose }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     console.log('Signup:', { email, password });
//     // Handle signup logic here
//     onClose();
//   };

//   if (!show) return null;

//   return (
//     <div className="modal-backdrop custom-modal">
//       <div className="modal-content">
//         <h2>Signup</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Email:</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
//           <label>Confirm Password:</label>
//           <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          
//           <button type="submit" className="btn">Signup</button>
//         </form>
//         <button className="btn-close" onClick={onClose}></button>
//       </div>
//     </div>
//   );
// };

// export default SignupModal;
