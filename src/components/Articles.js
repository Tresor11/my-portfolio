import React from "react";
import Fade from "react-reveal/Fade";
import ArticleLink from "./ArticleLink";

const Articles = () => {
  return (
    <div className="article-cont" id="articles">
      <Fade top>
        <div className="section-intro">
          <h1>ARTICLES</h1>
        </div>
      </Fade>
      <Fade bottom>
      <div className="articles">

        <ArticleLink
          title={"Creating Image Uploader in Rails 6 Using Cloudinary and Carrierwave"}
          link={"https://hackernoon.com/creating-image-uploader-in-rails-6-using-cloudinary-and-carrierwave-jp173u1w"}
        />

        <ArticleLink
          title={"Ensuring Data Integrity in Ruby on Rails using Transactions"}
          link={"https://tresor-bireke.medium.com/making-your-rails-app-more-efficient-with-transactions-dc8cb9a43f5c"}
        />

        <ArticleLink
          title={"Should you use Active Model?"}
          link={"https://tresor-bireke.medium.com/should-you-use-active-model-f4f7c790b729"}
        />

        <ArticleLink
          title={"Easily create an admin interface in Rails with active admin"}
          link={"https://tresor-bireke.medium.com/easily-create-an-admin-interface-in-rails-with-active-admin-7474b4fd0c0e"}
        />

        <ArticleLink
          title={"An Introduction to Backtracking in Ruby"}
          link={"https://hackernoon.com/an-introduction-to-backtracking-in-ruby-fb5z32so"}
        />

        <ArticleLink
          title={"The superpower of the order CSS property"}
          link={"https://medium.com/@tresor.moise2001/the-superpower-of-the-order-css-property-and-the-cool-things-you-can-do-with-it-using-flex-and-36a86c1a80e8"}
        />
      </div>
      </Fade>
    </div>
  );
};

export default Articles;
