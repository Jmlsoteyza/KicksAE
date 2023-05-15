import React from "react";
import "../Styles/About.css";
import aboutLogo from "../assets/images/aboutLogo.png";
import aboutUsimg from "../assets/images/aboutUs-img.png";
import AboutMap from "./AboutMap";
import { MdLocationPin, MdCall, MdMail } from "react-icons/md";

const About = () => {
  return (
    <section className="about-us_container">
      <div className="about_logo">
        <img src={aboutLogo} alt={aboutLogo} />
        <h1>About Us</h1>
      </div>
      <div className="about-us_innerContainer">
        <div className="about-us_center">
          <img src={aboutUsimg} alt={aboutUsimg} />
          <div className="about-us_text">
            <h1>About KicksAE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              praesentium incidunt? Consequuntur, excepturi? Perferendis fuga,
              inventore ut quam soluta expedita voluptates enim repellat, quidem
              quae, id dolorum at ex praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              quae? Modi officia odit perferendis itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              quisquam quis neque voluptate nulla omnis dolore perferendis
              praesentium, architecto repellendus eius tempore, iusto et quo.
              Odio cupiditate dolore quasi cumque?
            </p>
          </div>
        </div>
      </div>
      <div className="contact-us_headerContainer">
        <h1 className="contact-us_header">Contact Us</h1>
      </div>
      <div className="contact-us_container">
        <div className="contact-us_innerContainer">
          <div className="contact-us_contactDetails">
            <h1>Contact Details</h1>
            <div className="contact-details_container">
              <div className="contact-details_flex">
                <div
                  className="contact-us_icons"
                  style={{ marginTop: "-0.6rem" }}
                >
                  <MdLocationPin className="contact-us_mdIcons" />
                </div>
                <div style={{ display: "block" }}>
                  <p>28 Green Tower, Street Name,</p>
                  <p> New York City, USA</p>
                </div>
              </div>
              <div className="contact-details_flex">
                <div className="contact-us_icons">
                  <MdCall className="contact-us_mdIcons" />
                </div>
                <span>+880 1234 123456</span>
              </div>
              <div className="contact-details_flex">
                <div className="contact-us_icons">
                  <MdMail className="contact-us_mdIcons" />
                </div>
                <span>company-email@gmail.com</span>
              </div>
            </div>
            <div className="contact-message_container">
              <h1>Send Message</h1>
              <div className="contact-message_innerContainer">
                <label htmlFor="name">
                  <input type="text" placeholder="Name" />
                </label>
                <label htmlFor="email">
                  <input type="email" placeholder="Your email here..." />
                </label>
                <label htmlFor="description">
                  <textarea
                    type="description"
                    name=""
                    id=""
                    placeholder="Your comment here..."
                  />
                </label>
                <div className="contact-message_btn">
                  <button>Submit Message</button>
                </div>
              </div>
            </div>
          </div>
          <AboutMap />
        </div>
      </div>
    </section>
  );
};

export default About;
