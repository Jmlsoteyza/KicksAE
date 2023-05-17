import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../Styles/Checkout.css";
import { HiTrash } from "react-icons/hi";
import { removeItem } from "../Components/redux/CartReducer";
import CardPayment from "../Components/CardPayment";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const datesText = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const secondDays = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
  const fourDays = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);

  return (
    <section className="Checkout_container">
      <div className="Checkout_innerCointaner">
        <div className="Checkout-payments_productsContainer">
          <CardPayment />
          <div className="Checkout-products_container">
            <div className="Checkout-products_innerContainer">
              <div className="Checkout-products_header">
                <h1>Your Bag</h1>
                <span>({products.length})</span>
              </div>
              <div className="Checkout-products_text">
                <p style={{ textAlign: "center" }}>
                  Your order qualifies for
                  <span style={{ fontWeight: "550" }}> Free Delivery</span>
                </p>
              </div>
              <div className="Checkout_date">
                <h1>
                  Estimated Delivery by{" "}
                  <span>
                    {secondDays.toLocaleDateString("en-US", datesText)} -{" "}
                  </span>
                  <span>{fourDays.toLocaleDateString("en-US", datesText)}</span>
                </h1>
              </div>
              <div className="Checkout-bag_container">
                {products.map((products) => (
                  <div
                    className="Checkout-bag_singleContainer"
                    key={products.id}
                  >
                    <div className="Checkout-bag_img">
                      <img src={products.image} alt="" />
                    </div>
                    <div className="Checkout-bag_text">
                      <span>{products.title}</span>
                      <h2>{products.subTitle}</h2>
                      <h3>{products.size}</h3>
                      <span>AED {products.price}</span>
                    </div>
                    <div className="Checkout-bag_removeIcon">
                      <HiTrash
                        onClick={() => dispatch(removeItem(products.id))}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
