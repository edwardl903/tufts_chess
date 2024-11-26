import React from 'react';
import './Header.css';

function Header() {
  const openNav = () => {
    document.getElementById("mobileNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mobileNav").style.width = "0%";
  };

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <h1>
              Tufts Chess Club <i className="fas fa-chess"></i>
            </h1>
          </a>
        </div>
        <div className="links link-text">
          <a href="/community">Community</a>
          <a href="/about">About</a>
          <a href="/club">Club</a>
          <a href="/gallery">Gallery</a>
          <a href="/resources">Resources</a>
          <a href="/contact">Contact</a>
          <button className="menu" onClick={openNav}>
            &#9776;
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div id="mobileNav" className="overlay">
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <div className="overlay-content">
          <a href="/community">Community</a>
          <a href="/about">About</a>
          <a href="/club">Club</a>
          <a href="/gallery">Gallery</a>
          <a href="/resources">Resources</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;