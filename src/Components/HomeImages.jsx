import React from "react";
import "../Styles/HomeImages.css";
import { Link } from "react-router-dom";

const HomeImages = () => {
  const homeImagesData = [
    {
      subTitle: "Jordan",
      btn: "SHOP NOW",
    },
    {
      subTitle: "Nike Airforce",
      btn: "SHOP NOW",
    },
    {
      subTitle: "PUMA",
      btn: "SHOP NOW",
    },
  ];

  return (
    <div className="HomeImages_container">
      <div className="HomeImages-inner_container">
        <h1 className="homeImages-h1">Pick Your Brand</h1>
        <div className="HomeImages_images">
          {homeImagesData.map((product) => {
            return (
              <div key={product.id} className="">
                <div className="HomeImages_titles">
                  <h1>{product.subTitle}</h1>
                  <Link to="/StoreProduct">
                    <button>{product.btn}</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeImages;
