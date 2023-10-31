import React from "react";
import "./styles.css"; // Import the external CSS file
import lady from "../../assets/lady.jpeg"
import arrow from "../../assets/ArrowRight.svg"


const HeroSection = () => {
  return (
    <section id="home" className="home-section">
      <div className="blobs"></div>
      <div id="home" className="main-content">
        <div className="left-block">
         
          <h1 className="title">Discover The Magic Of Meeting In Moment</h1>
          <h5 className="sub-text">
            Closer is a super cool social networking app that lets you discover and connect with people around you in real life. It uses your location to show you profiles of other users on Closer who were in close proximity to you.
          </h5>
          <button className="cta">
            Get in touch&nbsp;
            <img src={arrow} alt="cta" />
          </button>
        </div>
        <img
          src={lady}
          alt="Mobile Svg"
          className="mobile-svg"
          width="400"
          height="400"
        />
      </div>
    </section>
  );
};

export default HeroSection;
