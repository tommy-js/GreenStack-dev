import React from "react";
import { Link } from "react-router-dom";
import { returnDate } from "./index";
import page from "../images/post_img.png";
import like from "../images/like.png";
import dislike from "../images/dislike.png";

interface Hist {
  style: string;
  text: string;
  timestamp: number;
}

export const HistoryElement: React.FC<Hist> = (props) => {
  function returnImg() {
    if (props.style === "Post") {
      return <img className="history_img" src={page} />;
    } else if (props.style === "Like") {
      return <img className="history_img" src={like} />;
    } else if (props.style === "Dislike") {
      return <img className="history_img" src={dislike} />;
    } else return null;
  }

  return (
    <Link className="link_style notifications_link" to="/home/profile">
      <div className="history_icon">{returnImg()}</div>
      <div className="history_text_block">
        <p className="history_text">{props.text}</p>
        <p className="history_text">{returnDate(props.timestamp)}</p>
      </div>
    </Link>
  );
};
