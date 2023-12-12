import React, { useEffect } from "react";
import lady from "../../assets/lady.jpeg";
import "./styles.css";
import AOS from "aos";
// import NavigationIcon from '@mui/icons-material/Navigation';


const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    {/* <div></div> */}
      <div className="features-container" id="features">
        <h1>Features</h1>
        <div className="features-box">
          <div className="features-image">
            <div data-aos="zoom-in-down">
              <img src={lady} alt="Lady" />
            </div>
          </div>
          <div className="features-text">
            <div
              data-aos="zoom-in-up"
            >
              <ul class="image-list" >
                <li>
                  It is an open social media application platform where people
                  can freely connect, share moments, and engage with others.
                </li>
                <li>
                  Our unique location-based technology ensures that you never
                  miss an opportunity to connect with someone who could be your
                  perfect match.
                </li>
                <li>
                  It's not just about making connections; it's also about
                  monetization.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
