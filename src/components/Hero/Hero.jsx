import React from 'react'
import "./Hero.css";
import handcrafts from "../Assets/14027.png";
// import arrow from "../Assets/arrow.png";
// import hands from "../Assets/hands.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>SHILPGRAH</h2>
        <div>
          <div className="hand-hand-icon">
            <p>bridging the</p>
            <img src={handcrafts} alt="" />
          </div>
          <p>gap between local</p>
          <p>vendors and global</p>
        </div>
        <div className="hero-latest-button">
          <div>Latest Collection</div>
          {/* <img src={arrow} alt='' /> */}
        </div>
      </div>
      {/* <div className="hero-right">
        <img src={hands} alt=''/>
      </div> */}
    </div>
  );
}

export default Hero