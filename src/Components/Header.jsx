import React from "react";

import { Link } from "react-router-dom";
import './Header.css';

function Header(){
  
  return(
    <div className="head_container">
      <h3>hello</h3>
      <h3>EXPENSE TRACKER</h3>
     <ul>
      <Link className="link" to="/">HOME</Link>
      <Link className="link" to="/register">REGISTER</Link>
      <Link className="link" to="/login">LOGIN</Link>
      <Link className="link" to="/about">ABOUT</Link>
      <Link className="link" to="/contact">CONTACT</Link>
     </ul>
    </div>
  );
}

export default Header;