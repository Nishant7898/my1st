import React from "react";
import "./signup.css"; 

const Signup = ({ isopen, isclose }) => {
  if (!isopen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="New Password" />
          <input type="text" placeholder="Confirm New Password" />
          <button type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={isclose}>
          Close
        </button>
      </div>
    </div>
  );
};  

export default Signup;
