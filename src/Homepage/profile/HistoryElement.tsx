import React, { useEffect } from "react";
import { returnDate } from "../../notifications/notificationsTimestamp";
import page from "../../images/post_img.png";
import like from "../../images/like.png";
import dislike from "../../images/dislike.png";

interface Props {
  style: string;
  text: string;
  timestamp: number;
}

const HistoryElement: React.FC<Props> = (props) => {
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
    <div className="profile_trade">
      <div className="notifications_link">
        <div className="history_icon">{returnImg()}</div>
        <div className="history_text_block">
          <p className="history_text">{props.text}</p>
          <p className="history_text">{returnDate(props.timestamp)}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryElement;
