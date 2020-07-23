import React from "react";
import Fade from "react-reveal/Fade";

const Article = () => {
  return (
    <div className="article-cont" id="articles">
      <Fade top>
        <div className="section-intro">
          <h1>ARTICLES</h1>
        </div>
      </Fade>
      <Fade bottom>
      <div className="articles">
        <a
          href="https://hackernoon.com/creating-image-uploader-in-rails-6-using-cloudinary-and-carrierwave-jp173u1w"
          rel="noopener noreferrer"
          target="_blank"
          className="article"
        >
          Creating Image Uploader in Rails 6 Using Cloudinary and Carrierwave
        </a>
        <a
          href="https://hackernoon.com/an-introduction-to-backtracking-in-ruby-fb5z32so"
          rel="noopener noreferrer"
          target="_blank"
          className="article"
        >
          An Introduction to Backtracking in Ruby
        </a>

        <a
          href="https://medium.com/@tresor.moise2001/the-superpower-of-the-order-css-property-and-the-cool-things-you-can-do-with-it-using-flex-and-36a86c1a80e8"
          rel="noopener noreferrer"
          target="_blank"
          className="article"
        >
          The superpower of the order CSS property
        </a>
      </div>
      </Fade>
    </div>
  );
};

export default Article;
