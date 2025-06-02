import React, { useState } from "react";
import "./signup.css";

const Signup = ({ isopen, isclose }) => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Confirmnew, setConfirmnew] = useState("");
  const [Error, setError] = useState("");

  // Don't render if modal not open
  if (!isopen) return null;

  const handleSignup = (e) => {
    e.preventDefault(); // ❌ You wrote `e.preventdefault()` (case-sensitive)

    // Validation: check empty fields
    if (!FullName || !Email || !Password || !Confirmnew) {
      setError("All fields are required");
      return;
    }

    // Check passwords match
    if (Password !== Confirmnew) {
      setError("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExist = users.find((user) => user.email === Email);
    if (userExist) {
      setError("User with this email already exists");
      return;
    }

    const newUser = { fullName: FullName, email: Email, password: Password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Now login.");
    
    // Reset form
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmnew("");
    setError("");

    isclose(); // Close the modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            value={FullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            value={Confirmnew}
            onChange={(e) => setConfirmnew(e.target.value)}
          />
          {Error && <span className="error">{Error}</span>}
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
