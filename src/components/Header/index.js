import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/logo.jpeg";
import "./styles.css"; // Import the external CSS file

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

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    if (mq.matches) {
      gsap.to(element, {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        padding: "1rem 2.5rem",
        border: "2px solid black",
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom+=200 top",
          end: "+=100",
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",
        border: "3px solid var(--white)",
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <header ref={ref} className="header"> {/* Apply CSS class to the header element */}
      <div className="logo"> {/* Apply CSS class to the logo container */}
        <img src={logo} alt="CodeBucks" />
        <h3>Closer</h3>
      </div>
      <nav className="nav"> {/* Apply CSS class to the nav container */}
        <a href="#home" onClick={(e) => scrollUp("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollUp("about", e)}>
          About Us
        </a>
        <a href="#Features" onClick={(e) => scrollUp("features", e)}>
          Features
        </a>
        <a href="#contact" onClick={(e) => scrollUp("contact", e)}>
          <button className="button">Contact Us</button> {/* Apply CSS class to the button */}
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
          <button className="button">Contact Us</button> {/* Apply CSS class to the button */}
        </a>
      </nav>
    </header>
  );
};

export default Header;
