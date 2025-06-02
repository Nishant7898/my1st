import React, { useState } from "react";
import "./login.css";
import Signup from "./signup";

const Auth = () => {
  const [showModal, setShowModal] = useState(false);
  const handleLogin=(e)=>{
    e.preventDefault();
    if (validateform()){
      const users=JSON.parse(localStorage.getItem("users")) || []
      const matcheduser=users.find((user)=>user.username===username || (user.email===username && user.password===password))
      if (matcheduser && matcheduser.password ===password){
        alert("login successfull")
      }
      else{
        alert("invalid credentials")
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="welcome">
        <h1>Welcome to Our Page.....!</h1>
      </div>
        <div className="inputs">
          <input id="username" type="text" placeholder="Enter Email" />
        </div>
        <input id="password" type="password" placeholder="Password" />
        <div className="buttons">
          <div className="loginn">
            <button>Login</button>
          </div>
          <span>New user? Click here to sign up</span>
          <div className="signup">
            <button onClick={() => setShowModal(true)}>Signup</button>
          </div>
        </div>
      </div>

      <Signup isopen={showModal} isclose={() => setShowModal(false)} />
    </>
  );
};

export default Auth;
