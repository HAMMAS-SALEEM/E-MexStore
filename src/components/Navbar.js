import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/icons/logo.svg';
import '../stylesheets/navbar.css';
import burger from '../assets/images/icons/burger.svg';
import close from '../assets/images/icons/close.svg';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const navLinks = [
    { id: 1, name: 'Home', to: '/' },
    { id: 2, name: 'Login', to: '/LoginPage' },
    { id: 3, name: 'Create an account', to: '/Signup' },
  ];
  const handleVisible = () => setVisible(!visible);
  return (
    <header className="site-header">
      <button type="button" onClick={handleVisible} className="nav-btn"><img className="burger-icon" src={burger} alt="menu button" /></button>
      <div className={visible ? 'show-nav' : 'hide-nav'}>
        <div className="nav-contents">
          <button type="button" onClick={handleVisible} className="nav-btn"><img src={close} alt="close btn" className="closeBtn" /></button>
          <img src={logo} alt="logo icon" id="nav-logo" className="company-logo" />
          <span className="site-name">México Tienda</span>
          <input type="text" placeholder="Search..." className="search-box" />
        </div>
        <nav className="nav-container">
          {
                navLinks.map((link) => (
                  <NavLink key={link.id} to={link.to}>{link.name}</NavLink>
                ))
            }
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
