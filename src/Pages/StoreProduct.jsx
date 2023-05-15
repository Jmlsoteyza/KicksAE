import React, { useState } from "react";
import ProductData from "../Components/ProductData";
import "../Styles/StoreProduct.css";
import { Link } from "react-router-dom";
import PercentSlider from "../Components/PercentSlider";
import logoAds from "../assets/images/logo_ads2.png";
import { useLocation } from 'react-router-dom';

const StoreProduct = () => {
  const [data, setData] = useState(ProductData);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [price, setPrice] = useState(0);
  const [sortProducts, setSortProducts] = useState("");

  

  const sortData = (productsSort) => {
    switch (productsSort) {
      case "atoz":
        return filteredData.sort((a, b) =>
          a.shortTitle.localeCompare(b.shortTitle)
        );
      case "ztoa":
        return filteredData.sort((a, b) =>
          b.shortTitle.localeCompare(a.shortTitle)
        );
      case "hightolow":
        return filteredData.sort((a, b) => b.price - a.price);
      case "lowtohigh":
        return filteredData.sort((a, b) => a.price - b.price);
      default:
        return filteredData;
    }
  };

  // price
  const handlePriceRange = (e) => {
    setPrice(e.target.value);
  };

  // filter
  const filterResult = (catProducts) => {
    const result = ProductData.filter((currentData) => {
      return currentData.category === catProducts;
    });
    setData(result);
  };

  const resetFilter = () => {
    setData(ProductData);
  };

  // checkbox
  const handleBrandCheckbox = (e) => {
    const brand = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    }
  };

  const filteredData = data.filter((product) => {
    if (selectedBrands.length === 0 && price === 0) {
      return true;
    } else if (selectedBrands.length === 0) {
      return parseInt(product.price) <= parseInt(price);
    } else if (price === 0) {
      return selectedBrands.includes(product.brand);
    } else {
      return (
        selectedBrands.includes(product.brand) &&
        parseInt(product.price) <= parseInt(price)
      );
    }
  });

  return (
    <>
      <PercentSlider />
      <section className="product_container">
        <div className="product-inner_container">
          <div className="product-filter_container">
            <h1 className="product-filter_title">Product Categories</h1>
            <div className="product-filter_span">
              <span
                className="product_span"
                onClick={() => filterResult("lebron")}
              >
                Lebron
              </span>
              <span
                className="product_span"
                onClick={() => filterResult("jordan")}
              >
                Jordan
              </span>
              <span
                className="product_span"
                onClick={() => filterResult("Nike AirForce1")}
              >
                Nike Airforce 1
              </span>
              <span className="product_span">Puma</span>
              <span className="product_span">New Balance</span>
              <span className="product_span" onClick={() => resetFilter()}>
                All
              </span>
            </div>
            <div className="product-filter_span">
              <h1>Brands</h1>
              <div className="product-checkbox_label">
                <label className="labelCb">
                  <input
                    type="checkbox"
                    value="nike"
                    onChange={handleBrandCheckbox}
                  />
                  Nike
                </label>
                <label className="labelCb">
                  <input
                    type="checkbox"
                    value="new balance"
                    onChange={handleBrandCheckbox}
                  />
                  New Balance
                </label>
                <label className="labelCb">
                  <input
                    type="checkbox"
                    value="puma"
                    onChange={handleBrandCheckbox}
                  />
                  Puma
                </label>
              </div>
            </div>
            <div className="product-filter_span">
              <h1>Price</h1>
              <label className="product-price_input">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={price}
                  onInput={handlePriceRange}
                />
                <div className="product-price_rangeText">
                  <p>AED {price}</p>
                  <p>AED 1000</p>
                </div>
              </label>
            </div>
            <div className="product-filter_span sortBy">
              <h1>Sort by:</h1>
              <div className="product-btn_sortBy">
                <span onClick={() => setSortProducts("atoz")}>A to Z</span>
                <span onClick={() => setSortProducts("ztoa")}>Z to A</span>
                <span onClick={() => setSortProducts("hightolow")}>
                  Price: High-Low
                </span>
                <span onClick={() => setSortProducts("lowtohigh")}>
                  Price: Low-High
                </span>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="products-imageAds">
              <img src={logoAds} alt={logoAds} />
            </div>
            <div className="testing">
              {sortData(sortProducts).map((products) => {
                return (
                  <div className="product_flex" key={products.id}>
                    <div className="product_image" key={products.id}>
                      <Link
                        className="productLink"
                        to={`/StoreProduct/${products.id}`}
                      >
                        <img src={products.image} />
                        <h1>{products.shortTitle}</h1>
                      </Link>
                      <h2>{products.subTitle}</h2>
                      <h3>AED {products.price}</h3>
                    </div>
                    <div className="buythis"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreProduct;
