import React, { useState } from "react";
import { useSelector } from "react-redux";

const CardPayment = () => {
  const products = useSelector((state) => state.cart.products);

  const subTotal = products.reduce((acc, curr) => {
    return acc + parseInt(curr.price);
  }, 0);

  const fee = 4;
  const total = fee + subTotal;

  // credit card
  const [cardNumber, setCardNumber] = useState("");

  const cardValue = (e) => {
    setCardNumber(e.target.value);
  };

  const value = cardNumber.replace(/[^0-9]/gi, "").substring(0, 16);
  const partsContainer = [];

  for (let i = 0; i < value.length; i += 4) {
    partsContainer.push(value.substr(i, 4));
  }

  const formattedValue = partsContainer.join(" ");

  // date

  const [dateNumber, setDateNumber] = useState("");

  const dateTargetValue = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue
      .replace(/\D/g, "")
      .substring(0, 6)
      .replace(/^(..)/g, "$1 / ");
    setDateNumber(formattedValue);
  };

  const [formErrors, setFormErrors] = useState({});

  const [email, setEmail] = useState("");

  const emailValue = (e) => {
    setEmail(e.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!email) {
      errors.email = "Email is required";
    }

    if (!cardNumber || cardNumber.length < 16) {
      errors.cardNumber = "Invalid credit card number";
    }

    if (!dateNumber || dateNumber.length < 6) {
      errors.dateNumber = "Invalid expiry date";
    }
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    validateForm();
  };

  return (
    <div className="Checkout-payments_container">
      <div className="Checkout-payments_header">
        <h1>Payment Details</h1>
      </div>
      <form
        action="payment"
        className="Checkout_form"
        onSubmit={handleFormSubmit}
      >
        <div className="Checkout_email">
          <span>Email address</span>
          <input
            type="Email"
            name="Email"
            placeholder="Email"
            onChange={emailValue}
          />
          {formErrors.email && (
            <div className="error-message">{formErrors.email}</div>
          )}
        </div>
        <div className="Checkout_creditCard">
          <span>Credit Card Number</span>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={cardValue}
            value={formattedValue}
          />
          {formErrors.cardNumber && (
            <div className="error-message">{formErrors.cardNumber}</div>
          )}
        </div>
        <div className="Checkout-Date_CVV">
          <div className="Checkout_Date">
            <span>Expiry Date</span>
            <input
              type="tel"
              placeholder="mm / yy"
              onChange={dateTargetValue}
              value={dateNumber}
            />
            {formErrors.dateNumber && (
              <div className="error-message">{formErrors.dateNumber}</div>
            )}
          </div>
          <div className="Checkout_CVV">
            <span>CVV</span>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength="3"
              placeholder="x x x"
            />
          </div>
        </div>
        <div className="Checkout_checkbox">
          <input type="checkbox" name="promodocode" />
          <h2>I have promo code</h2>
        </div>
        <div className="Checkout_subtotal">
          <h3>Subtotal</h3>
          <h6>AED {subTotal}</h6>
        </div>
        <div className="Checkout_fee">
          <h3>Platform Fee</h3>
          <h6>AED {fee}</h6>
        </div>
        <hr />
        <div className="Checkout_totalAmount">
          <h3>Total Amount</h3>
          <h6>AED {total}</h6>
        </div>
        <div className="Checkout-form_button">
          <button type="payment">Make Payment</button>
        </div>
      </form>
    </div>
  );
};

export default CardPayment;
