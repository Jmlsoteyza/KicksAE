import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const PercentSlider = () => {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        Autoplay: true,
        autoplay: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="hero_autoplay"
    >
      <SwiperSlide className="try">
        <div className="hero-autoplay_text">
          KicksAE offers you fast delivery and free shipping for order AED 199.
          Payment by Cash on Delivery, Tabby & More. <span>Learn More</span>
        </div>
      </SwiperSlide>
      <SwiperSlide className="try">
        <div className="hero-autoplay_text">
          40% off season sale is on.{" "}
          <Link className="hero_shopnow" to="/StoreProduct">
            <span>Shop now</span>
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default PercentSlider;
