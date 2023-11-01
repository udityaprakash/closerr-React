import React from "react";
import "./styles.css";
import lady from "../../assets/lady.jpeg";

const HeroSection = () => {
  return (

    <div id="home" className="main-content">
      <div className="left-block">
        <h1 className="title">Discover The Magic Of Meeting In Moment</h1>
        <h5 className="sub-text">
          Closer is a super cool social networking app that lets you discover
          and connect with people around you in real life. It uses your location
          to show you profiles of other users on Closer who were in close
          proximity to you.
        </h5>
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Get Demo</span>
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
   
  );
};

export default HeroSection;
