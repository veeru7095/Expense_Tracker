import React, { useState } from "react";
import './AddTask.css'
import { useNavigate } from "react-router-dom";

function AddTask(){

  const [title,setTitle]=useState("");
  const [amount,setAmount]=useState("");
  const [category,setCategory]=useState("");
  const [paymentMode,setPaymentMode]=useState("");
  const [date,setDate]=useState("");
  const [note,setNote]=useState("");

  const navigate=useNavigate();

 
  const userId = localStorage.getItem("userId");

  const addTaskDetails={title,amount,category,paymentMode,date,note};

  const handleAddTASK=async(e)=>{
    e.preventDefault();

    try{
      const response= await fetch(`http://localhost:8080/api/${userId}/add`,{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },body:JSON.stringify(addTaskDetails)
      })
      if(response.ok){
        const data=await response.json();
        console.log(data);
        alert("Data Is Updated")
        navigate("/dashboard")

      }
      else{
        const err=await response.json();
        console.log(err)
      }
    }
    catch{
      alert("data is not submitted due to interanl error")
    }


  }


  return(
    <div className="addTaskContainer">
      <h1>ADD TASK HERE</h1>
      <form action="" onSubmit={handleAddTASK}>
        <label htmlFor="">TITLE:
          <input type="text" placeholder="Ex:Book purchased" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </label>
        <label htmlFor="">AMOUNT
          <input type="number" placeholder="Ex: 2000" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </label>
        <label htmlFor="">CATEGORY:
          <select name="" id="" value={category} onChange={(e)=>setCategory(e.target.value)} >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="rent">Rent</option>
            <option value="travel">travel</option>
            <option value="shopping">Shopping</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="education">Education</option>
            <option value="medical">Medical</option>
            <option value="gifts">Gifts</option>
            <option value="fitness/health">Fitness/Health</option>
            <option value="investment">Investment</option>
            <option value="insurance">Insurance</option>
            <option value="personalCare">Personalcare</option>
            <option value="others">others(note)</option>
          </select>
        </label>
        <label htmlFor="">PAYMENT_MODE:
          <select name="" id="" value={paymentMode} onChange={(e)=>setPaymentMode(e.target.value)}>
          <option value="paymentMode" className="payment">paymentMode</option>
          <option value="online"  className="payment">Online</option>
          <option value="Credit_Card"  className="payment">CreditCard</option>
          <option value="Cash"  className="payment">Cash</option>
          <option value="others"  className="payment">Others</option>
          </select>
        </label>
        <label htmlFor="">Date
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </label>
        <label htmlFor="">Note
          <input type="text" placeholder="Ex:Payment pending or Emi pending or Done payment" value={note} onChange={(e)=>setNote(e.target.value)} />
        </label>
        <button className="AddTaskBtn">SUBMIT</button>
        
      </form>

    </div>
  );
}

export default AddTask;