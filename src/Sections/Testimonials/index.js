import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css"; 
import appdeveloper from "../../assets/uditya.jpeg"
import frontenddeveloper from "../../assets/shadab (1).jpg"

const Testimonials = () => {
  return (
    <>
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={2000}
    >
        <div>
          <img src={frontenddeveloper}  alt="abg"/>
          <div className="myCarousel">
            <h3>Shadab Ali</h3>
            <h4>Developer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={appdeveloper} alt="abg"/>
          <div className="myCarousel">
            <h3>UDITYA PRAKASH</h3>
            <h4>App Developer </h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>

        {/* <div>
          <img src="https://th.bing.com/th?id=OIP.UkTBowRhbbhym0TupnXktgHaE7&w=306&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="abg"/>
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Frontend Developer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div> */}

        <div>
          <img src="https://th.bing.com/th?id=OIP.PlmU4CkadPFONP2jfjfSLwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="abg"/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Backend Developer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        {/* <div>
          <img src="https://th.bing.com/th?id=OIP.nzqKyZd-q8C9rjA3Jx7FWgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="abg"/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Backend Developer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>     */}
        
    </Carousel>
    </>
  );
};

export default Testimonials;
