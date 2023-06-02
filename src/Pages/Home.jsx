import React from "react";
import { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/Home.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroimg1 from "../assets/images/heroimg1.png";
import heroimg2 from "../assets/images/heroimg2.png";
import heroimg3 from "../assets/images/heroimg3.png";
import { Link } from "react-router-dom";
import HomeUI from "../Components/HomeUI";
import HomeCarousel from "../Components/HomeCarousel";
import HomeImages from "../Components/HomeImages";
import PercentSlider from "../Components/PercentSlider";
import HomeLogos1 from "../assets/images/HomeLogos1.png";
import HomeLogos2 from "../assets/images/HomeLogos2.png";
import HomeLogos3 from "../assets/images/HomeLogos3.png";
import BrandIcon1 from "../assets/images/brandsIcon1.jpg";
import BrandIcon2 from "../assets/images/brandsIcon2.jpg";
import BrandIcon3 from "../assets/images/brandsIcon3.jpg";

const Home = () => {
  const heroData = [
    {
      id: 1,
      name: "Lebron 18 Row",
      subName: "NIKE",
      desc: "Multicolour leather x Space Jam LeBron 18 Low sneakers from NIKE featuring signature Swoosh logo detail, contrasting panel detail, round toe, front lace-up fastening, logo patch at the tongue, branded insole and rubber sole.",
      images: heroimg1,
      imgLogo: HomeLogos1,
    },
    {
      id: 2,
      name: "New-Balance",
      subName: "NEW-BALANCE",
      desc: "kangkong kalabasa yea kangkong kalabasa yea kangkong kalabasa yea kangkong kalabasa yea kangkong kalabasa yea kangkong kalabasa yea kangkong kalabasa yea",
      images: heroimg2,
      imgLogo: HomeLogos2,
    },
    {
      id: 3,
      name: "Puma",
      subName: "PUMA",
      desc: "lorem ipsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      images: heroimg3,
      imgLogo: HomeLogos3,
    },
  ];

  return (
    <section className="hero_container">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {heroData.map((products) => (
          <SwiperSlide className="swiper" key={products.id}>
            <PercentSlider />
            <div className="hero-inner_container">
              <div className="hero_layout">
                <div className="hero_layout-subNames">
                  <div className="hero-layout_logoNames">
                    <h1>{products.subName}</h1>
                    <img src={products.imgLogo} alt={products.imgLogo} />
                  </div>
                  <span>NEW COLLECTION</span>
                </div>
                <h2>{products.name}</h2>
                <p>{products.desc}</p>
                <div className="hero-layout_button">
                  <Link to="/StoreProduct">
                    <button>Shop Now</button>
                  </Link>
                </div>
              </div>
              <div className="hero_images">
                <img src={products.images} alt={products.images} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <HomeUI />
      <HomeCarousel />
      <HomeImages />
      <div className="hero-icons_container">
        <div className="hero-icons_InnerContainer">
          <img className="hero-icons_nike" src={BrandIcon1} alt="BrandIcon1" />
          <img className="hero-icons_logo" src={BrandIcon2} alt="BrandIcon1" />
          <img className="hero-icons_logo" src={BrandIcon3} alt="BrandIcon1" />
        </div>
      </div>
    </section>
  );
};

export default Home;
