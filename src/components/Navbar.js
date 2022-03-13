import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/icons/logo.svg';
import '../stylesheets/navbar.css';

const Navbar = () => {
  const navLinks = [
    { id: 1, name: 'Home', to: '/' },
    { id: 2, name: 'Login', to: '/LoginPage' },
    { id: 3, name: 'Create an account', to: '/Signup' },
  ];
  return (
    <header className="site-header">
      <section className="header-top">
        <img src={logo} alt="logo icon" id="nav-logo" />
        <input type="text" placeholder="Search..." className="search-box" />
      </section>
      <nav>
        {
                navLinks.map((link) => (
                  <NavLink key={link.id} to={link.to}>{link.name}</NavLink>
                ))
            }
      </nav>
    </header>
  );
};

export default Navbar;
