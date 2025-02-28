import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";
import logo from "../../assets/logo.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import download from "../../assets/CLOSER (1).pdf"

const Header = () => {
  // const [click, setClick] = useState(false);
  const [open,setOpen] = useState(false);

  const mobMenu = useRef(null);
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

  // const handleClick = (id, e) => {
  //   setClick(!click);
  //   scrollUp(id, e);
  // };

  const openMenu = () => {
    setOpen(true)
    mobMenu.current.style.display = "flex"
  }

  const closeMenu = () => {
    setOpen(false)
    mobMenu.current.style.display = "none"
  }


  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    if(width>877)
    {
      setOpen(false)
      mobMenu.current.style.display = "none"

    }
},[width]);


  return (
    <div className="header" ref={ref}>
      <div className="logo">
        <img src={logo} alt="closer" />
        <h3 style={{color:"rgb(23,220,211)", fontFamily:"Pacifico"}}>Closer</h3>
      </div>
      <div className="nav">

        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          About
        </a>
        <a href="#mission" onClick={(e) => scrollUp("mission", e)}>
          Mission
        </a>
        <a href="#features" onClick={(e) => scrollUp("features", e)}>
          Features
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          Contact Us
        </a>
        <a href={download} download="Closer">Download</a>
      </div>

      <div className="mobileMenu" ref={mobMenu}>
        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          About Us
        </a>
        <a href="#mission" onClick={(e) => scrollUp("mission", e)}>
          Mission
        </a>
        <a href="#features" onClick={(e) => scrollUp("features", e)}>
          Features
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          Contact Us
        </a>
        <a>
          Download PDF
        </a>
      </div>

      {/* Add HamburgerBtn and MobileMenu components here */}
        <div className="hamburgerMenu">
          <AiOutlineMenu className="hamburgerBtn" onClick={openMenu} style={{display:open?"none":"block"}}/>
          <AiOutlineClose className="hamburgerClose" onClick={closeMenu} style={{display:open?"block":"none"}}/>
        </div>
    </div>
  );
};

export default Header;
