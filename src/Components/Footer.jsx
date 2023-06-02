import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_innerContainer">
          <div className="footer-container_flex">
            <div className="footer_single">
              <h1>CONTACT US</h1>
              <ul className="footer_ul">
                <li>
                  <span>Address: </span>
                  Al mankhool St
                  <br /> Bur Dubai, Dubai Frame
                </li>
                <li>
                  <span>Cellphone: </span>
                  012345 - 123456789
                </li>
                <li>
                  <span>Email:</span>
                  Jmlsoteyza.dev@gmail.com
                </li>
              </ul>
            </div>
            <div className="footer_accounts">
              <h1>BRANDS</h1>
              <ul className="footer_ul">
                <li>Nike</li>
                <li>Puma</li>
                <li>New-Balance</li>
              </ul>
            </div>
            <div className="footer_accounts">
              <h1>KICKSAE APP</h1>
              <ul className="footer_ul">
                <li>KICKSAE Ball Coach</li>
                <li>KICKSAE Training Camp</li>
              </ul>
            </div>
            <div className="footer_accounts subs_email">
              <h1>NEWSLETTER</h1>

              <div className="footer_email">
                <label>
                  <input type="email" placeholder="Your email address" />
                  <button className="footer-email_button">SUBSCRIBE</button>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="footer_bottom">
        <div className="footer_innerBottom">
          <span>© KicksAE. All Rights Reserved 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
