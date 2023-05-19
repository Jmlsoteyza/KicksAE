import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import "../Styles/Navbar.css";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const navbarClick = () => setNavbarOpen(!navbarOpen);

  const handleCartClose = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="navbar_container">
        <div className="navbar_wrapper">
          <NavLink to="/">
            <div className="logo">
              <img src={Logo} alt={Logo} />
            </div>
          </NavLink>
          <ul className={navbarOpen ? "navbar_ul active" : "navbar_ul"}>
            <NavLink
              className={({ isActive }) => (isActive ? "link active" : "link")}
              to="/"
            >
              <li className="navbar_home">Home</li>
            </NavLink>
            <NavLink to="About" className="link">
              <li>About</li>
            </NavLink>
            <NavLink to="StoreProduct" className="link">
              <li>Shop</li>
            </NavLink>
            <NavLink to="Blogs" className="link">
              <li>Blogs</li>
            </NavLink>
          </ul>
          <div className="navbar_right">
            <div className="navbar_searchBar">
              <input
                className="navbar_search"
                type="text"
                placeholder="Search"
              />
              <button className="navbar-btn_logo">
                <BiSearch
                  className="navbar-search_logo"
                  style={{ fontSize: 25 }}
                />
              </button>
            </div>
            <div className="navbar_cartLogo">
              <div
                className="navbar_shoppingBag"
                onClick={() => setOpen(!open)}
              >
                <span className="navbar_number">{products.length}</span>
                <BiShoppingBag
                  style={{ fontSize: "26px", cursor: "pointer" }}
                />
              </div>
            </div>
            <div
              className={navbarOpen ? "toggle active" : "toggle"}
              onClick={navbarClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>
      {open && <Cart handleClose={handleCartClose} />}
    </>
  );
};

export default Navbar;
