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
          <Link to="/leaderboards" className='navbar-item'>
            About us
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <button className="navbar-link">Menu</button>
            <div className="navbar-dropdown">
              <Link to="/profile" className="navbar-item">Members</Link>
              <Link target='blank' to="https://forms.gle/bwP5wjmxCFyg7ALx6" className="navbar-item">Join us!</Link>
              {/* <Link to="/submit" className='navbar-item'>Submit</Link>
              <Link to="/settings" className="navbar-item">Settings</Link> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
