import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="row">
          {/* About Section */}
          <div className="col">
            <h5>About Us</h5>
            <p>
              Tufts Chess Club is an innovative platform to elevate the chess journey,
              bring together passionate players, and cultivate a thriving chess community.
            </p>
          </div>
          {/* Contact Section */}
          <div className="col">
            <h5>Contact Us</h5>
            <p>177 College Ave, Medford, MA 02155</p>
            <p>jumboschessclub@gmail.com</p>
            <p>(123) 456-7890</p>
          </div>
          {/* Social Media Section */}
          <div className="col">
            <h5>Follow Us</h5>
            <a href="#">Facebook</a>
            <br />
            <a href="https://www.instagram.com/tuftschessclub">Instagram</a>
            <br />
            <a href="https://discord.gg/sAuH4dMw9s">Discord</a>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="row">
          <div className="col">
            <hr />
            <p>&copy; 2024 Tufts Chess Club. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;