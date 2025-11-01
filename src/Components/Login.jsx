import React, { useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginDetails = { username, password };
    
    

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginDetails)
      });

      if (response.ok) {
        const data = await response.json(); 
        alert("Login successful");

        localStorage.setItem("userId", data.id); 
        localStorage.setItem("userName",data.userName)
        navigate("/dashboard"); 
      } else {
        const err = await response.text();
        alert(err);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid user...");
    }
  };

  return (
    <div className="login_container">
      <h3>LOGIN HERE</h3>
      <form onSubmit={handleLogin}>
        <label>
          NAME:
          <input
            type="text"
            placeholder="Enter name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          PASSWORD:
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="login-btn">SUBMIT</button>
      </form>
    </div>
  );
}

export default Login;
