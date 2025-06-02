import React from "react";
import "./signup.css"; 

const Signup = ({ isopen, isclose }) => {
  const [FullName, setFullName] = useState("")
  const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
  const [Confirmnew, setConfirmnew] = useState("")
  const [Error, setError] = useState("")
  if (!isopen) return null;
  const handlesignup=(e)=>{
    e.preventdefault()
    if(!FullName || ! Email || !Password || !Confirmnew )
    {
      setError("All fields Are required")
      return;
    }
    const users=JSON.parse(localStorage.getItem("users")) || [];
    const userExist=users.find((user)=>user.email===Email)
    localStorage.setItem("users",JSON.stringify(users))
    if(userExist){
      setError("user with this email already exist")
      return
    }
    const newuser={FullName,Email,Password,Confirmnew};
    users.push(newuser)
    alert("Sign up is Successfull Now Login..");
    setFullName("")
    setEmail("")
    setPassword("")
    setConfirmnew("")
    setError("")
    isclose();

  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" value={FullName} onChange={(e)=>setFullName(e.target.value)}/>
          <input type="email" placeholder="Email Address" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="New Password" value={Password} onChange={(e)=>setPassword(e.target.value)} />
          <input type="text" placeholder="Confirm New Password" value={Confirmnew} onChange={(e)=>setConfirmnew(e.target.value)}/>
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
