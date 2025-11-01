import React, { useState } from "react";
import './Register.css'
import { useNavigate } from "react-router-dom";

function Register(){

  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
  const navigate=useNavigate();

  const users={username,email,password,role};
  

  const UserHandler=async(e)=>{
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:8080/api/auth/register",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },body:JSON.stringify(users)
      })

      if(response.ok){
        const data=await response.json();
        alert("user Registration successfull please login")
        navigate("/login")

        
      }
      else{
        const err=await response.json();
        alert("registeration unsuccessful please check username ")
      }

    }
    catch{
      alert("unsuccessfull due to internal server error")

    }

  }

  return(
    <div className="Register_container">
      <div className="register_head">
        <h3 >REGISTER HERE</h3>
      </div>
      <form action="" onSubmit={UserHandler}>
        <label htmlFor="">NAME:
        <input type="text" placeholder="Enter name of urs" name="name" onChange={(e)=>setUserName(e.target.value)} />
      </label>
      <label htmlFor="">EMAIL:
        <input type="email" placeholder="Enter your email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
      </label>
      <label htmlFor="">PASSWORD:
        <input type="password" placeholder="Enter your password" name="password" onChange={(e)=>setPassword(e.target.value)} />
      </label>
      <label htmlFor="">ROLE:
        <input type="text" placeholder="Enter your Role" name="name" onChange={(e)=>setRole(e.target.value)} />
      </label>
      <button className="btn">SUBMIT</button>
      </form>
      
    </div>
  );
}

export default Register;