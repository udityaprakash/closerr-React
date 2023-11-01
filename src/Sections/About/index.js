import React, { useEffect } from "react";
import "./styles.css"; // Import the external CSS file
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
        <h1 className="title">About Us</h1>

        <div className="content">
          <div className="rocket">
            <div
              data-aos="fade-right"
              data-aos-offset="400"
              data-aos-easing="ease-in-sine"
            >
              <img src={rocket} alt="" width="400" height="400" />
            </div>
          </div>
          <div className="about-text">
            <h4
              className="text"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Closer is an innovative startup in the online social media and
              networking industry, It was designed and developed by MAVI
              TECHNOLOGIES PVT LTD . Our app uses location-based technology to
              connect users who are nearby or have crossed paths in real life
              .we turns missed connections into potential relationships. With a
              focus on serendipity and proximity, Closer offers a unique and
              exciting way for people to meet and connect. We projected our
              revenue streams through targeted advertising. Our growth plan
              includes strategic partnerships, marketing initiatives, and
              continuous product enhancements. We project strong revenue and
              profitability as we revolutionize the way people connect. Join us
              on this incredible journey and be part of reshaping the future of
              relationships! we are the upcoming and highly anticipated startup
              in the online social networking industry. Our app, which is set to
              launch soon. We at closer aims to revolutionize the way people
              meet and connect. We have exciting revenue streams planned,
              including targeted advertising. Stay tuned for updates on our
              launch and be ready to experience a whole new way of finding
              meaningful connections!
            </h4>

            <div>
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
