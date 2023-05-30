import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductData from "./ProductData";
import { useMediaQuery } from "react-responsive";
import "../Styles/HomeCarousel.css";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  const BrandsResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="homeCarousel_container">
      <h1 className="h1_absolute">Trending This Week</h1>
      <Carousel
        // useMediaQuery={isTabletOrMobile}
        responsive={BrandsResponsive}
        additionalTransfrom={0}
        autoPlaySpeed={3000}
        className="yes"
        containerClass="container"
        infinite
        autoPlay={true}
        itemClass="carouselItem"
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        slidesToSlide={1}
      >
        {ProductData.map((product) => (
          <div key={product.key} className="carousel-item">
            <div className="carousel-item-container">
              <Link to={`/StoreProduct/${product.id}`}>
                <img
                  className="small"
                  src={product.image}
                  alt={product.image}
                />
              </Link>
              <div>
                <h1>{product.title}</h1>
                <h2>{product.subTitle}</h2>
                <h3>AED {product.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
