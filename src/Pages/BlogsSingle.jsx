import React from "react";
import { useParams } from "react-router-dom";
import BlogsData from "../Components/BlogsData";
import "../Styles/BlogsSingle.css";
import aboutLogo from "../assets/images/aboutLogo.png";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";

const BlogsSingle = () => {
  const { id } = useParams();
  const items = BlogsData.find((items) => items.id === parseInt(id));
  const { img, date, title } = items;

  return (
    <section className="BlogsSingle_container">
      <div className="BlogsSingle_logo">
        <img src={aboutLogo} alt={aboutLogo} />
      </div>
      <div className="BlogsSingle_innerContainer">
        <h1>{title}</h1>
        <div className="BlogsSingle_headline">
          <div className="BlogsSingle-headline-textLeft">
            <span>By: KicksAE</span>
            <span>{date}</span>
          </div>
          <div className="BlogsSingle-headline-textRight">
            <span>Share with:</span>
            <MdFacebook
              className="BlogsSingle_icons"
              style={{ fontSize: "33px" }}
            />
            <AiFillTwitterCircle
              className="BlogsSingle_icons"
              style={{ fontSize: "32px", marginLeft: "-0.5rem" }}
            />
          </div>
        </div>
        <div className="Blogs_image">
          <img src={img} alt="" />
        </div>
        <div className="BlogsSingle-text_center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
            ipsum quo, eum, laudantium voluptate velit eveniet maxime iure
            corrupti nesciunt at numquam neque veniam non iste similique eius?
            Natus?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
            rerum soluta commodi recusandae harum corporis temporibus
            reprehenderit nihil deleniti velit minus dicta cum? Consectetur
            aperiam quia deserunt vero beatae id?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            consectetur molestias est ab quidem voluptatem, dignissimos quod
            minima, voluptatum id sint veritatis distinctio libero sequi facere
            optio, officia incidunt vitae.
          </p>
          <p>
            Etiam eget erat est. Phasellus elit justo, mattis non lorem non,
            aliquam aliquam leo. Sed fermentum consectetur magna, eget semper
            ante. Aliquam scelerisque justo velit. Fusce cursus blandit dolor,
            in sodales urna vulputate lobortis. Nulla ut tellus turpis. Nullam
            lacus sem, volutpat id odio sed, cursus tristique eros. Duis at
            pellentesque magna. Donec magna nisi, vulputate ac nulla eu,
            ultricies tincidunt tellus. Nunc tincidunt sem urna, nec venenatis
            libero vehicula ut.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Curabitur faucibus aliquam pulvinar. Vivamus
            mattis volutpat erat, et congue nisi semper quis. Cras vehicula
            dignissim libero in elementum. Mauris sit amet dolor justo. Morbi
            consequat velit vel est fermentum euismod. Curabitur in magna augue.
          </p>
        </div>
        <div>
          <div className="BlogsSingle_tags">
            <h1>Tags:</h1>
            {items.tags.map((tag) => (
              <button key={tag}>{tag}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSingle;
