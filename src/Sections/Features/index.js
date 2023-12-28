import React, { useEffect } from "react";
// import lady from "../../assets/lady.jpeg";
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
        <h1 className="title3">Features</h1>
        <div className="features-box">
          <div className="features-image">
            <div data-aos="zoom-in-down">
              <img src="https://st2.depositphotos.com/4242631/6430/v/450/depositphotos_64302369-stock-illustration-map-icon-with-pin-pointer.jpg" alt="Lady" />
            </div>
          </div>
          <div className="features-text">
            <div
              data-aos="zoom-in-up"
            >
              <ul class="image-list" >
                <li>
                <h3>Location based Technology:-</h3> The app distinctive feature of linking users
                based on proximity or real-life
                intersections marks a revolutionary shift in the industry. 
                 ( Our unique location-based technology ensures that you never
                  miss an opportunity to connect with someone who could be your
                  perfect match.)
                </li>
                <li>
                <h3>Unique advertising model:- </h3>
                Closer introduce an innovative advertising model designed to empower creators 
                by enabaling them to monetize the photos they share.
                
                </li>
                <li>
                <h3>Hyper-localized interaction:- </h3> 
                  With Closer,users can engage with individuals in their vicinity 
                  without the need for direct physical interaction.
                </li>
                <li>
                <h3>Optimized home feed for seemless UX:- </h3> 
                  Experience a seemlessly optimized home feed, ensuring a smooth and enjoyable 
                  user experience at your fingertips.
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
