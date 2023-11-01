import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/logo.jpeg";
import "./styles.css"; 

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
    <header ref={ref} className="header"> 
      <div className="logo">
        <img src={logo} alt="CodeBucks" />
        <h3>Closer</h3>
      </div>
      <nav className="nav"> 
        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          About Us
        </a>
        <a href="#Features" onClick={(e) => scrollUp("features", e)}>
          Features
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)} >
          <button className="button" style={{fontWeight:"bolder"}}>Contact Us</button>
        </a>
      </nav>
      <div
        className={`hamburger-btn ${click ? "clicked" : ""}`}
        onClick={() => setClick(!click)}
      >
        <span></span>
      </div>
      <nav className={`mobile-menu ${click ? "clicked" : ""}`}>
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => handleClick("about", e)}>
          About Us
        </a>
        <a href="#features" onClick={(e) => handleClick("features", e)}>
          features
        </a>
        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
          <button className="button">Contact Us</button>
        </a>
      </nav>
    </header>
  );
};

export default Header;
