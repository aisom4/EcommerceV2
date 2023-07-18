import React from "react";
import { Link } from "react-router-dom";
// Setting up the navigation bar - wrapping each of the navigation elements in link tags
const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="navList">
          <li className="navLogo">
            <Link to="/">
              <img src="./vinylLogo.png" alt="website logo" />
            </Link>
          </li>

          <li className="navItem">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/about" className="navLink">
              About
            </Link>
          </li>

          <li className="navItem">
            <Link to="/products" className="navLink">
              Products
            </Link>
          </li>
          <li className="navItem">
            <Link to="/contact" className="navLink">
              Contact
            </Link>
          </li>
          <li className="navItem">
            <Link to="/" className="navLink log">
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
