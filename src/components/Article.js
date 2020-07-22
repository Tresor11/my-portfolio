import React from "react";
import Fade from "react-reveal/Fade";

const Article = () => {
  return (
    <div className="article-cont" id="article">
      <Fade top>
        <div className="section-intro">
          <h1>ARTICLES</h1>
        </div>
      </Fade>
      <div className="articles">
        <a href="#" className="article">
          Creating Image Uploader in Rails 6 Using Cloudinary and Carrierwave
        </a>
        <a className="article">An Introduction to Backtracking in Ruby</a>

        <a href="#" className="article">
          The superpower of the order CSS property
        </a>
      </div>
    </div>
  );
};

export default Article;
