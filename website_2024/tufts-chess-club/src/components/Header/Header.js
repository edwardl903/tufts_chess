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
        <div className="nav-item">
          <Link to="/">Home</Link>
          <div className="dropdown-menu">
            <Link to="/home/news">News</Link>
            <Link to="/home/events">Events</Link>
            <Link to="/home/updates">Updates</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
          <div className="dropdown-menu">
            <Link to="/about/history">History</Link>
            <Link to="/about/team">Team</Link>
            <Link to="/about/vision">Vision</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/leaderboards">Leaderboards</Link>
          <div className="dropdown-menu">
            <Link to="/leaderboards/top-scores">Top Scores</Link>
            <Link to="/leaderboards/weekly">Weekly</Link>
            <Link to="/leaderboards/monthly">Monthly</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/resources">Resources</Link>
          <div className="dropdown-menu">
            <Link to="/resources/tutorials">Tutorials</Link>
            <Link to="/resources/faq">FAQ</Link>
            <Link to="/resources/docs">Documentation</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/gallery">Gallery</Link>
          <div className="dropdown-menu">
            <Link to="/gallery/photos">Photos</Link>
            <Link to="/gallery/videos">Videos</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/contact">Contact</Link>
          <div className="dropdown-menu">
            <Link to="/contact/email">Email</Link>
            <Link to="/contact/phone">Phone</Link>
            <Link to="/contact/location">Location</Link>
          </div>
        </div>
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
