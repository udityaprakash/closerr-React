import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";
import logo from "../../assets/logo.jpeg"; 

const Header = () => {
  const [click, setClick] = useState(false);

  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  return (
    <div className="header" ref={ref}>
      <div className="logo">
        <img src={logo} alt="closer" />
        <h3>Closer</h3>
      </div>
      <div className="nav">
        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          About Us
        </a>
        <a href="#services" onClick={(e) => scrollUp("services", e)}>
          Services
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          Contact Us
        </a>
      </div>
      {/* Add HamburgerBtn and MobileMenu components here */}
    </div>
  );
};

export default Header;
