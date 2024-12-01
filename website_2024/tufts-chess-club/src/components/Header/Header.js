import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Header.css';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  return (
    <header className="header">
      <div className="tufts-logo"></div>
      <div className="navbar">
        {/* Use Link for navigation */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/leaderboards">Leaderboards</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <button className="menu" onClick={openNav}>
          &#9776;
        </button>
      </div>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div id="mobileNav" className="overlay">
          <button className="closebtn" onClick={closeNav}>
            &times;
          </button>
          <div className="overlay-content">
            {/* Mobile navigation links */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/leaderboards">Leaderboards</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
