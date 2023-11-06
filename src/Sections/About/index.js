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
              data-aos="zoom-in-up"
            >
              <img src={rocket} alt="" width="400" height="400" />
            </div>
          </div>
          <div className="about-text">
            <h4
              className="text"
              data-aos="zoom-in-down"
            >
              Closer is an innovative startup in the online social media and
              networking industry, It was designed and developed by MAVI
              TECHNOLOGIES PVT LTD . Our app uses location-based technology to
              connect users who are nearby or have crossed paths in real life
              .Our aim is to turn missed connections into potential relationships. With a
              focus on serendipity and proximity, Closer offers a unique and
              exciting way for people to meet and connect. Our growth plan
              includes strategic partnerships, marketing initiatives, and
              continuous product enhancements.. Join us
              on this incredible journey and be part of reshaping the future of
              relationships! we are the upcoming and highly anticipated startup
              in the online social networking industry. Our app, which is set to
              launch soon. We at closer aims to revolutionize the way people
              meet and connect.Closer have exciting revenue streams planned,
              including hyper-localised targeted advertisment.
              <pre>
                <p>
                  |

                </p>
              </pre>
              <b><h3>

                  Stay tuned for updates and be ready to experience a whole new way of finding meaningful connections!
              </h3>
                  </b>
              {/* <p>
                </p> 
              <b>
              
              </b> */}
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
