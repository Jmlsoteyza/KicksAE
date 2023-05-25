import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductData from "../Components/ProductData";
import "../Styles/Products.css";
import tabby from "../assets/images/tabby.png";
import ProductSingleFaq from "../Components/ProductSingleFaq";
import { useDispatch } from "react-redux";
import { addToCart } from "../Components/redux/CartReducer";
import CartProductsSlider from "../Components/CartProductsSlider";
import Cart from "../Components/Cart";
import ProductsAdds from "../Components/ProductsAdds";
import PercentSlider from "../Components/PercentSlider";

const Products = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = ProductData.find((products) => products.id === parseInt(id));
  const { title, subTitle, price, oldPrice } = products;
  const reducedPrice = price * 0.25;
  const [mainImage, setMainImage] = useState(products.image);
  const [subImages] = useState(products.subImage);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeBtn, setActiveBtn] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCartClose = () => {
    setOpen(false);
  };

  const handleShoesBorder = (index) => {
    setActiveBtn(index);
  };

  const handleTextColor = (index) => {
    setActiveIndex(index);
  };

  const handleImageClick = (subImage) => {
    setMainImage(subImage);
  };

  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelect = (event) => {
    setSelectedSize(event.target.value);
  };

  const renderSizeOptions = () => {
    if (activeIndex === 0) {
      return products.eU.map((size, index) => (
        <button
          className={`Products-shoesizes_btn ${
            activeBtn === index ? "active" : ""
          }`}
          tabIndex="0"
          onClick={() => handleShoesBorder(index)}
          key={index}
          value={size.value}
        >
          {size.value}
        </button>
      ));
    } else {
      return products.uS.map((size, index) => (
        <button
          className={`Products-shoesizes_btn ${
            activeBtn === index ? "active" : ""
          }`}
          tabIndex="0"
          onClick={() => handleShoesBorder(index)}
          key={index}
          value={size.value}
        >
          {size.value}
        </button>
      ));
    }
  };

  useEffect(() => {
    setMainImage(products.image);
  }, [id]);

  return (
    <>
      <PercentSlider />
      <section className="Products_container">
        <div className="Products-inner_container">
          <Link to="/StoreProduct" className="Product_link">
            <span className="Products-text_seeAll">Shop all</span>
          </Link>
          <ProductsAdds products={products} />
          <div className="Products-flex_container">
            <div className="Products-images_container">
              <div className="main-image_container">
                <img className="main_image" src={mainImage} alt={mainImage} />
              </div>
              <div className="sub-images_container">
                {subImages.map((subImage, index) => (
                  <div className="sub-images" tabIndex="0" key={subImage}>
                    <img
                      className="sub-image"
                      key={index}
                      src={subImage}
                      alt={`${title} sub-image ${index + 1}`}
                      onClick={() => handleImageClick(subImage)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="Products_aside">
              <h1>{title}</h1>
              <p className="Products-aside_subTitle">{subTitle}</p>
              <div className="Products_price">
                <p className="Products-price_price">AED {oldPrice}</p>
                <p className="Products-price_oldPrice">AED {price}</p>
              </div>
              <div className="Products-details_container">
                <div className="Products-size">
                  <p>Select Size</p>
                  <span>Size Guide</span>
                </div>
              </div>
              <div className="Products-cty_sizes">
                <p
                  tabIndex="0"
                  className={
                    activeIndex === 0
                      ? "Products-cty_text_eu active "
                      : "active"
                  }
                  onClick={() => handleTextColor(0)}
                >
                  EU
                </p>
                <p
                  tabIndex="0"
                  className={
                    activeIndex === 1 ? "Products-cty_text active " : "active"
                  }
                  onClick={() => handleTextColor(1)}
                >
                  US
                </p>
              </div>
              <div className="Products-shoe_container">
                <div
                  className="Products-shoe_sizes"
                  value={selectedSize}
                  onChange={handleSizeSelect}
                >
                  {renderSizeOptions()}
                </div>
              </div>
              <div className="Products-payments_container">
                <div className="Products_interest">
                  <div className="Products-four_payments">
                    <p>
                      or 4 payments of <span>AED {reducedPrice}. </span>No
                      interest, <br></br> no fees.{" "}
                      <span className="Products_learnMore">Learn more</span>
                    </p>
                  </div>
                  <div>
                    <img src={tabby} alt={tabby} />
                  </div>
                </div>
                <div className="Products_addToBag">
                  <button
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: id,
                          title: title,
                          subTitle: subTitle,
                          price: price,
                          image: mainImage,
                        })
                      );
                      setOpen(true);
                    }}
                  >
                    Add to bag
                  </button>
                  {open && <Cart handleClose={handleCartClose} />}
                </div>
                <ProductSingleFaq />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CartProductsSlider />
    </>
  );
};
export default Products;
