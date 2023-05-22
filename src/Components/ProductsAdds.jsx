import React from "react";

const ProductsAdds = ({ products }) => {
  console.log(products);
  return (
    <div className="Products_adds-text">
      <h1>{products.title}</h1>
      <p className="Products-aside_subTitle">{products.subTitle}</p>
      <div className="Products_price">
        <p className="Products-price_price">AED {products.oldPrice}</p>
        <p className="Products-price_oldPrice">AED {products.price}</p>
      </div>
    </div>
  );
};

export default ProductsAdds;
