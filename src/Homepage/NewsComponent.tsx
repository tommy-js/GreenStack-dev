import React from "react";
import NewsCompOptions from "./NewsCompOptions";

interface Props {
  title: string;
  author: string;
  description: string;
  url: string;
}

const NewsComponent: React.FC<Props> = (props) => {
  return (
    <div className="news_block">
      <a className="standard_link" href={props.url}>
        <h3>{props.title}</h3>
        <p>{props.author}</p>
        <p>{props.description}</p>
      </a>
      <NewsCompOptions />
    </div>
  );
};

export default NewsComponent;
