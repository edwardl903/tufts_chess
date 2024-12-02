import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Contact Us */}
      <div className="footer-contact">
        <p>Contact Us</p>
        <a href="mailto:jumboschessclub@gmail.com">jumboschessclub@gmail.com</a>
        <a
          href="https://www.google.com/maps/place/177+College+Ave,+Medford,+MA+02155"
          target="_blank"
          rel="noopener noreferrer"
        >
          177 College Ave, Medford, MA 02155
        </a>
        <a href="tel:+1234567890">(123) 456-7890</a>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <div>
          <a
            href="https://www.instagram.com/tuftschessclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Instagram</span>
            <img src="../images/InstagramLogo.png" alt="Instagram Logo" />
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Facebook</span>
            <img src="../images/FacebookLogo.png" alt="Facebook Logo" />
          </a>
        </div>
        <div>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Discord</span>
            <img src="../images/DiscordLogo.png" alt="Discord Logo" />
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="footer-logo">
        <a href="/">
          <img
            src="../images/Tuftschessclub_Logo.png"
            alt="Tufts Chess Club Logo"
          />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; 2024 Tufts Chess Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
