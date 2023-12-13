import React, { useEffect } from "react";
import "./styles.css";
import rocket from "../../assets/rocketimage.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="about">
      <div className="main">
        <h1 className="title1">About Us</h1>
    
        <div className="content">
          <div className="rocket">
            <div data-aos="zoom-in-up">
              <img src={rocket} alt="" width="400" height="400" />
            </div>
          </div>
          <div className="about-text">
            <h4 className="text" data-aos="zoom-in-down">
              Closer is an innovative startup in the online social media and
              networking industry, It was designed and developed by MAVI
              TECHNOLOGIES PVT LTD .<br></br>
              It is based on hyper-location and uses location-based API
              technology to connect users who are nearby or have crossed paths
              in real life .At closer our aim is to turn thousands of missed
              connections into potential relationships with a strong focus on
              serendipity and proximity.we project our growth plan through
              strategic partnerships,multiple market initatives and continious
              product enhancement.
              <br></br>
              Join us on this incredible journey and be part of CLOSER by
              reshaping the future of relationships and connections.
              <br></br>
              <b>Closer is set to launch soon.</b>
              <br></br>
              You will be able to download the application directly from the
              Playstore and Appstore.
              <br></br>
              Stay tuned for the updates and be ready to experience a whole new
              way of finding meaningful connections.
            </h4>

            <div className="circle-container">
              <span
                className="circle"
                style={{ backgroundColor: "rgb(21, 221, 211)" }}
              />
              <span
                className="circle"
                style={{ backgroundColor: "rgb(21, 221, 211)" }}
              />
              <span
                className="circle"
                style={{ backgroundColor: "rgb(21, 221, 211)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
