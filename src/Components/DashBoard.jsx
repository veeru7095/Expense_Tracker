import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Dashboard.css'



function Dashboard(){
  return(
    <div className="dashboardCon">
     <Link to="/AddTask"><button style={{backgroundColor:"yellow",
      marginRight:"3rem",
      height:"3rem",
      width:"10rem",
      borderRadius:"3rem",
      border:"none",
      cursor:"pointer"
     }}>AddTask</button></Link>
     <Link to="/GetAllTasks"><button 
     style={{
      backgroundColor:"green",
       marginRight:"3rem",
      height:"3rem",
      width:"10rem",
      borderRadius:"3rem",
      border:"none",
      cursor:"pointer"
     }}> GetAllTasks</button></Link>
    </div>
  )
}

export default Dashboard;