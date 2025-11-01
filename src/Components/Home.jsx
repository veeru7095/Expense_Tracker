import React from "react";
import { Link } from "react-router-dom";

function Home(){
  return(
    <div>
      <Link to="/register"><button style={{
        height:"40px",
        backgroundColor:"green",
        marginTop:"18rem",
        border:"2px solid grey",
        cursor:"pointer",
        width:"10rem",
        borderRadius:"1rem"


      }}>GetStarted</button></Link>

      <p style={{
        marginLeft:"5rem",
        marginRight:"5rem",
        marginTop:"2rem",
        color:"grey"
      }}>
        An Expense Tracker is an application or tool used to record, manage, and analyze personal or business expenses. It helps users understand their spending habits, plan budgets, and save money effectively.
        An Expense Tracker is a tool (web app, mobile app, spreadsheet, or software) used to record, monitor, and analyze how much money a person or business spends over a period of time. It helps in budgeting, controlling overspending, and improving financial awareness.
      </p>
    </div>
  );
}

export default Home;
