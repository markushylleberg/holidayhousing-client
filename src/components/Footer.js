import React from 'react';
import {
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">FIND HOUSING</a>
        </div>
        <h3>HOLIDAY HOUSING</h3>
        <div>
          <a href="#">PRIVACY</a>
          <a href="#">SUPPORT</a>
          <a href="#">FOLLOW US</a>
        </div>
      </div>
      <div className="divider"></div>
      <div className="footer-some">
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaPinterestP />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </div>
      <p className="cr">© 2010 — 2020 HOLIDAY HOME</p>
    </footer>
  );
};

export default Footer;
