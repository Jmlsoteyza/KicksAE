import React from "react";
import "../Styles/HomeImages.css";
import { Link } from "react-router-dom";
import HomeImages1 from "../assets/images/HomeImages01.png";
import HomeImages3 from "../assets/images/HomeImages03.png";
import HomeImages2 from "../assets/images/HomeImages2.png";

const HomeImages = () => {
  const homeImagesData = [
    {
      subTitle: "Jordan",
      btn: "SHOP NOW",
      images: HomeImages3,
    },
    {
      subTitle: "Nike Airforce",
      btn: "SHOP NOW",
      images: HomeImages1,
    },
    {
      subTitle: "PUMA",
      btn: "SHOP NOW",
      images: HomeImages2,
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
                <img src={product.images} alt={product.images} />
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
