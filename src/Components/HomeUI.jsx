import React from "react";
import "../Styles/HomeUI.css";
import HomeUIimg1 from "../assets/images/HomeUIimg1.png";
import HomeUIimg2 from "../assets/images/HomeUIimg2.png";

const HomeUI = () => {
  return (
    <div className="homeUI_contaniner">
      <div className="homeUI_innercontainer">
        <div className="homeUI_firstImg">
          <img src={HomeUIimg1} alt={HomeUIimg1} />
          <h1>Color-pop pieces</h1>
          <p>
            Inject energy into your new-season wardrobe with bold separates by
            Isabel Marant, vibrant shirts from Palm Angels and much more
          </p>
        </div>
        <div className="homeUI_secImg">
          <img src={HomeUIimg2} alt={HomeUIimg2} />
          <h1>Most Trending New-Balance</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeUI;
