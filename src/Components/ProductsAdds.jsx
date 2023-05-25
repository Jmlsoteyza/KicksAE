import React from "react";

const ProductsAdds = ({ products }) => {
  return (
    <div className="Products_adds-text">
      <h1>{products.title}</h1>
      <p className="Products_adds-subTitle">{products.subTitle}</p>
      <p>AED {products.price}</p>
    </div>
  );
};

export default ProductsAdds;
