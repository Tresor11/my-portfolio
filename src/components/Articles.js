import React from "react";
import Fade from "react-reveal/Fade";
import ArticleLink from "./ArticleLink";
import data from '../data/data.json';

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
        {data.articles.collection.map((article) => (
          <ArticleLink
            key={article.id}
            title={article.title}
            link={article.link}
          />
        ))}
      </div>
      </Fade>
    </div>
  );
};

export default Articles;
