import React from "react";
import "./styles.css";

const Mission = () => {
  return (
    <>
      <div id="mission">
        <div className="mission-text-container">
          <h1>MISSION</h1>
          <p>
            We aim to redefine the way individuals connect by transforming
            overlooked interactions into opportunities for potential
            relationships.
          </p>
          <h1>VISION</h1>
          <p>
            Closer envisions a world where meeting new people is easier and more
            meaningful in today's fast-paced world.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=
          format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWlzc2lv
          biUyMGFuZCUyMHZpc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="mission-image"
        ></img>
      </div>
    </>
  );
};

export default Mission;
