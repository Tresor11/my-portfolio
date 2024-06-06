import React from "react";

const ArticleLink = ({ title,link }) => {
  return (
    <a
    href={link}
    rel="noopener noreferrer"
    target="_blank"
    className="article"
  >
    {title}
  </a>
  );
}

export default ArticleLink;

