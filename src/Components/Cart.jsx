// Cart.js
import React, { useEffect } from "react";
import "../Styles/Cart.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "./redux/CartReducer";
import { Link } from "react-router-dom";

const Cart = ({ handleClose }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const checkoutUrl = "/StoreProduct/Bags/Payments";

  useEffect(() => {
    document.body.classList.add("cart-modal-open");
    return () => {
      document.body.classList.remove("cart-modal-open");
    };
  }, []);

  if (products.length === 0) {
    return (
      <section className="cart_modal">
        <section className="cart_container_noBag">
          <div>
            <IoClose
              fontSize={"24px"}
              className="cart_close"
              onClick={handleClose}
              cursor={"pointer"}
            />
            <h1 color={"#111"}>Bag</h1>

            <span
              style={{
                fontSize: "14px",
                fontFamily: "Arimo, sans-serif",
                color: "#000",
              }}
            >
              There are no items in your bag.
            </span>
          </div>
        </section>
      </section>
    );
  }
  return (
    <section className="cart_modal">
      <section className="cart_position">
        <section className="cart_container">
          <div className="cart-added_logo" style={{ textAlign: "center" }}>
            <IoIosCheckmarkCircle fill="#128a09" fontSize={"18px"} />
            <p style={{ paddingLeft: "10px", fontSize: "14px", color: "#000" }}>
              Added To Bag
            </p>

            <IoClose
              fontSize={"24px"}
              className="cart_close"
              onClick={handleClose}
              cursor={"pointer"}
            />
          </div>
          {products.map((products) => (
            <div className="cart_mini" key={products.id}>
              <div className="cart_img">
                <img src={products.image} alt={products.image} />
              </div>
              <div className="cart-text_container">
                <HiTrash
                  className="cart_trashBin"
                  onClick={() => dispatch(removeItem(products.id))}
                />
                <h4 style={{ paddingBottom: "4.5px" }}>{products.title}</h4>
                <h5>{products.subTitle}</h5>
                <h5>Size EU {products.size}</h5>
                <h4 style={{ paddingTop: "4.5px" }}>AED {products.price}</h4>
              </div>
            </div>
          ))}
          <Link className="cart_link" to={checkoutUrl}>
            <div className="cart_checkout">
              <button>Checkout</button>
            </div>
          </Link>
          <span
            className="cart_remove"
            onClick={() => dispatch(resetCart(products.id))}
          >
            Remove All
          </span>
        </section>
      </section>
    </section>
  );
};

export default Cart;
