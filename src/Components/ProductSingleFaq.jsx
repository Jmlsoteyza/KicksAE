import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import "../Styles/Products.css";

const ProductSingleFaq = () => {
  const [productFaq, setProductFaq] = useState(false);
  const toggleFAQ = () => {
    setProductFaq((prevState) => !prevState);
  };

  return (
    <div className="Product-FAQ">
      <div className="Product_FAQ-title" onClick={toggleFAQ}>
        <h2>Free Delivery and Returns</h2>
        <BsChevronDown
          className={`FAQ-logo ${productFaq ? "rotate" : ""}`}
          style={{ fontSize: "1.057rem" }}
        />
      </div>
      <div
        className={`Product-FAQ_container ${productFaq ? "show" : ""}`}
        style={{
          maxHeight: productFaq ? "500px" : "0",
          transition: "max-height .3s ease-in-out",
        }}
      >
        <ul className="Product-ul">
          <li className="Product-li">
            You can return your order for any reason, free of{" "}
            <span>charge, within 30 days.</span>
          </li>
          <li className="Product-li">
            Free standard delivery for orders over AED 199.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSingleFaq;
