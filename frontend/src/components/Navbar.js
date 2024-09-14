import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/aboutus" className='navbar-item'>
            About us
          </Link>
        </div>
        <div className="navbar-end">
          <Link to="/openhouse" className='navbar-item'>Open Houses</Link>
          <Link target='_blank' to="https://forms.gle/bwP5wjmxCFyg7ALx6" className="navbar-item">Join us!</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
