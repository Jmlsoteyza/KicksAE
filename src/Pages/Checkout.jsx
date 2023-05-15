import React from "react";
import { useSelector } from "react-redux";
import "../Styles/Checkout.css";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products)

  return (
    <section className="Checkout_container">
      <div className="Checkout_innerCointaner">
        <div className="Checkout-payments_productsContainer">
          <div className="Checkout-payments_container">
            <div className="Checkout-payments_header">
              <h1>Payment Details</h1>
            </div>
            <form action="payment" className="Checkout_form">
              <div className="Checkout_email">
                <span>Email address</span>
                <input type="Email" name="Email" placeholder="Email" />
              </div>
              <div className="Checkout_creditCard">
                <span>Credit Card Number</span>
                <input type="tel" name="number" placeholder="Card Number" />
              </div>
              <div className="Checkout-Date_CVV">
                <div className="Checkout_Date">
                  <span>Expiry Date</span>
                  <input type="tel" placeholder="mm / yy" />
                </div>
                <div className="Checkout_CVV">
                  <span>CVV</span>
                  <input type="tel" placeholder="x x x" />
                </div>
              </div>
              <div className="Checkout_checkbox">
                <input type="checkbox" name="promodocode" />
                <h2>I have promo code</h2>
              </div>
              <div className="Checkout_subtotal">
                <h3>Subtotal</h3>
                <h6>AED 96</h6>
              </div>
              <div className="Checkout_fee">
                <h3>Platform Fee</h3>
                <h6>AED 4</h6>
              </div>
              <hr />
              <div className="Checkout_totalAmount">
                <h3>Total Amount</h3>
                <h6>AED 100</h6>
              </div>
              <div className="Checkout-form_button">
                <button type="payment">Make Payment</button>
              </div>
            </form>
          </div>
          <div className="Checkout-products_container">
            <div className="Checkout-products_innerContainer">
              <div className="Checkout-products_header">
                <h1>Your Bag</h1>
                <span>(0)</span>
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
