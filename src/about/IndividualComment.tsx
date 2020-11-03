import React from "react";
import { returnDate } from "../notifications/notificationsTimestamp";

interface Props {
  username: string;
  text: string;
  timestamp: number;
}

const IndividualComment: React.FC<Props> = (props) => {
  return (
    <div id="tutorial_comment">
      <h3 id="tutorial_comment_username">{props.username}</h3>
      <p id="tutorial_comment_text">{props.text}</p>
      <h4 id="tutorial_comment_timestamp">
        Posted at {returnDate(props.timestamp)}
      </h4>
    </div>
  );
};

export default IndividualComment;
