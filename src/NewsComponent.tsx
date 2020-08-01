import React from "react";

interface Props {
  title: string;
  author: string;
  description: string;
  url: string;
}

const NewsComponent: React.FC<Props> = (props) => {
  return (
    <div className="news_block">
      <a href={props.url}>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
        <p>{props.description}</p>
      </a>
    </div>
  );
};

export default NewsComponent;
