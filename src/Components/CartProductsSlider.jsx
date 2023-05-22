import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import mainProduct1 from "../assets/images/mainproduct-lbj.png";
import mainProduct2 from "../assets/images/mainproduct-lbj2.png";
import mainProduct3 from "../assets/images/mainproduct-jdn.png";
import mainProduct4 from "../assets/images/mainproduct-jdn1.png";
import mainProduct5 from "../assets/images/mainproduct-af1.png";
import mainProduct6 from "../assets/images/mainproduct-af2.png";
import mainProduct7 from "../assets/images/mainproduct-af3.png";
import "../Styles/CartProductSlider.css";

const CartProductsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [showProducts, setShowProducts] = useState(3);
  const [smallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const handleChangeSliderScreen = (e) => {
      setSmallScreen(e.matches);
      setShowProducts(e.matches ? 2 : 3);
    };

    mediaQuery.addEventListener("change", handleChangeSliderScreen);
    handleChangeSliderScreen(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleChangeSliderScreen);
    };
  }, [smallScreen]);
  const ProductSlider = [
    {
      id: 1,
      title: "Men's LeBron XX Shoe",
      subTitle: "Nike",
      price: "735.00",
      image: mainProduct1,
    },
    {
      id: 2,
      title: "Men's LeBron Witness 7 Basketball Shoe",
      subTitle: "Nike",
      price: "429.00",
      image: mainProduct2,
    },
    {
      id: 3,
      title: "Air Jordan 1 Mid 'Dark Concord' sneakers",
      subTitle: "Jordan",
      price: "680.00",
      image: mainProduct3,
    },
    {
      id: 4,
      title: "Men's Max Aura 4 Shoe",
      subTitle: "Jordan",
      price: "472.00",
      image: mainProduct4,
    },
    {
      id: 5,
      title: "Louis Vuitton x Nike Air Force 1 Green",
      subTitle: "Nike",
      price: "33.000",
      image: mainProduct5,
    },
    {
      id: 6,
      title: "Nike Air Force 1 '07 LV8",
      subTitle: "Nike",
      price: "472.00",
      image: mainProduct6,
    },
    {
      id: 7,
      title: "Louis Vuitton and Nike Air Force 1 Friends and Family",
      subTitle: "Nike",
      price: "268,085.20",
      image: mainProduct7,
    },
  ];
  const products = ProductSlider;
  const nextSlide = () => {
    if (current < products.length - showProducts) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="slide-container">
      <div className="slide-icons_flex">
        <div className="slide_text">
          <h1>You may frequently like</h1>
        </div>
        <div className="slide-icons">
          <span onClick={prevSlide}>
            <BsChevronLeft onClick={prevSlide} />
          </span>
          <span onClick={nextSlide}>
            <BsChevronRight onClick={nextSlide} />
          </span>
        </div>
      </div>
      <div className="slide-image_container">
        {products.slice(current, current + showProducts).map((product) => (
          <div className="slideImage" key={product.id}>
            <Link className="links" to={`/StoreProduct/${product.id}`}>
              <div className="slide-images active">
                <img src={product.image} alt={product.image} />
              </div>
              <div className="slide_desc">
                <h1>{product.title}</h1>
                <h2>{product.subTitle}</h2>
                <h3>AED {product.price}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartProductsSlider;
