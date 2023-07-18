import React from "react";

const Footer = () => {
  return (
    <footer>
      Made By Aishah
      <div className="footer-content">
        <div className="top-footer">
          <div className="footer-logo">
            <i className="fab fa-slack"></i>
            <span className="logo-name">Vinyl Visions</span>
          </div>
          <div className="media-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://snapchat.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-snapchat"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <ul className="footer-box">
            <li className="footer-list">Company</li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
          <ul className="footer-box">
            <li className="footer-list">Services</li>
            <li>
              <a href="#">App Design</a>
            </li>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Logo Design</a>
            </li>
            <li>
              <a href="#">Banner Design</a>
            </li>
          </ul>
          <ul className="footer-box">
            <li className="footer-list">Account</li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Prefrences</a>
            </li>
            <li>
              <a href="#">Purchases</a>
            </li>
          </ul>
          <ul className="footer-box">
            <li className="footer-list">Check Out More</li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Find More</a>
            </li>
            <li>
              <a href="#">PreOrder</a>
            </li>
            <li>
              <a href="#">Check Us Out</a>
            </li>
          </ul>
          <ul className="footer-box input-box">
            <li className="footer-list">Subscribe!</li>
            <li>
              <input type="text" placeholder="Enter your Email Here!" />
            </li>
            <li>
              <input type="button" value="Subscribe!" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
