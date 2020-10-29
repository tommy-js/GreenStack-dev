import React from "react";
import { returnDate } from "../../notifications/notificationsTimestamp";

interface Props {
  userId: string;
  username: string;
  commentId: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
}

const IndividualPostComment: React.FC<Props> = (props) => {
  return (
    <div className="individual_post_comment">
      <p className="individual_post_comment_username">{props.username}</p>
      <p className="individual_post_comment_text">{props.text}</p>
      <p className="individual_post_comment_date">
        Posted {returnDate(props.timestamp)}
      </p>
    </div>
  );
};

export default IndividualPostComment;
