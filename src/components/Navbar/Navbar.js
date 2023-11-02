import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import CodeIcon from "../../assets/Icons/code-bold.svg";
import HamburgerMenuClose from "../../assets/Icons/close-fill.svg";
import HamburgerMenuOpen from "../../assets/Icons/hamburger-lg.svg";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <span>CodeBucks</span>
          <span className="icon">
            <img src={CodeIcon} alt="Code Icon" />
          </span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          {click ? (
            <span className="icon">
              <img src={HamburgerMenuOpen} alt="Open Menu" />{" "}
            </span>
          ) : (
            <span className="icon">
              <img src={HamburgerMenuClose} alt="Close Menu" />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
