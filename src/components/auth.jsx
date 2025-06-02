import React, { useState } from "react";
import "./login.css";
import Signup from "./signup";


const Auth = () => {
  const [showModal, setShowModal] = useState(false);
const [Username, setUsername] = useState("")
const [Password, setPassword] = useState("")
const [Error, setError] = useState("")
const validateform=()=>{
  if(!Username || !Password){
    setError("fill the all fields")
    return false;
  }
  setError("")
  return true
}
const handlesign=(e)=>{
  e.preventdefault()
 if(validateform()){
  const users=JSON.parse(localStorage.getItem("users")) ||[]
  const matchedusers=users.find((user)=>
    (user.email===Username && user.Username===Username) && user.Password===Password
  )
  if(matchedusers){
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
          <input id="username" type="text" placeholder="Enter Email" value={Username} onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <input id="password" type="password" placeholder="Password"  value={Password} onChange={(e)=>setPassword(e.target.value)}/>
        {Error && <span> {Error}</span>}
        <div className="buttons">
          <div className="loginn">
            <button onClick={handlesign}>Login</button>
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
