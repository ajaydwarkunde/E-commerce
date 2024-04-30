import React from 'react'
import './Navbar.css';
import logo from '../assets/logo.jpg';
import login from '../assets/login.jpg';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo    ">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
    </div>
  )
}

export default Navbar
