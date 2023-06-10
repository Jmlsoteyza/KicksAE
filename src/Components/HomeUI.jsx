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
          <h1>Air Jordan 1 Retro High OG</h1>
          <p>
            Always fresh and timeless, the Air Jordan 1 High is one of the most
            iconic sneakers of all time.
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
