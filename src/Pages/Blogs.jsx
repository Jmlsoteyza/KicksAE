import React from "react";
import aboutLogo from "../assets/images/aboutLogo.png";
import "../Styles/Blogs.css";
import BlogsData from "../Components/BlogsData";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="Blogs_container">
      <div className="Blogs_logo">
        <img src={aboutLogo} alt={aboutLogo} />
        <h1>Blogs</h1>
      </div>
      <div className="Blogs_title">
        <h1>Latest Blogs</h1>
      </div>
      <div className="Blogs_innerContainer">
        <div className="Blogs_flex">
          {BlogsData.map((item) => (
            <div className="Blogs-data_container" key={item.id}>
              <img src={item.img} alt={item.img} />
              <div className="Blogs_description">
                <h1>{item.title}</h1>
                <h2>{item.desc}</h2>
                <h3>{item.date}</h3>
                <Link to={`/Blogs/${item.id}`}>
                  <button>
                    <span>Read more</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
