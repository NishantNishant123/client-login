import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css';

const Header = () => {
  return (
      <><div class="innerrightheader">
      
          <NavLink to="/login" exact class="navlink">Home</NavLink>
        </div>
        <div class="innerrightheader">
          <NavLink to="/login" exact class="navlink">Login</NavLink>
        </div>
        <div class="innerrightheader">
          <NavLink to="/register" exact class="navlink">Register</NavLink>
        </div>
       
        <div class="innerrightheader">
        <NavLink to="/secret" exact class="navlink">Secret Page</NavLink>
        </div>
        <div class="innerrightheader">
        <NavLink to="/delete" exact class="navlink">Logout</NavLink>
        </div>

      
      </>
    
  )
}

export default Header