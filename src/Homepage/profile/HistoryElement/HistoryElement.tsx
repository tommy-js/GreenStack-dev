import React from "react";
import { returnDate } from "./index";
import page from "../../../images/post_img.png";
import like from "../../../images/like.png";
import dislike from "../../../images/dislike.png";

interface Props {
  style: string;
  text: string;
  timestamp: number;
  postId: string;
  modPostLoad: (postId: string) => void;
}

export const HistoryElement: React.FC<Props> = (props) => {
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
    <div className="profile_trade notifications_link">
      <div className="history_icon">{returnImg()}</div>
      <div
        className="history_text_block"
        onClick={() => props.modPostLoad(props.postId)}
      >
        <p className="history_text">{props.text}</p>
        <p className="history_text">{returnDate(props.timestamp)}</p>
      </div>
    </div>
  );
};
