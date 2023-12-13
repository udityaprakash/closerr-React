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
        <h1 className="title2">Features</h1>
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
                Hyper location:- Introducing a new way of connecting people ,
                  now with just simple a click you'll be able to connect or chat
                  with people around you.

                 ( Our unique location-based technology ensures that you never
                  miss an opportunity to connect with someone who could be your
                  perfect match.) -in brackets
                </li>
                <li>
                Advertising and monetization :- Presenting a new way of Advertising
                 and monetizing posts ,with us now it'll become 100% easier and cost
                effective for an advertiser to advertise them through our platform with 
                a few steps .
                
                </li>
                <li>
                Localised searching:- Search anyone through their name & location 
                  and you'll get the exact person you're searching for with a blink 
                  of an eye.
                </li>
                <li>
                now no more hustle & struggle ,just join closer and solve your puzzle .
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
