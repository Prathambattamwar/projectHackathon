import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
     <img src={logo} alt="Aarogya Innovators Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/join-us">Join us</Link></li>
        <li><button className="btn-contact">Contact us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
