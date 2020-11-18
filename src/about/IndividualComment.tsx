import React, { useState, useEffect } from "react";
import { returnDate } from "../notifications/notificationsTimestamp";
import { returnTaggedString } from "../globals/functions/returnTagged";

interface Props {
  username: string;
  text: string;
  timestamp: number;
}

const IndividualComment: React.FC<Props> = (props) => {
  const [text, setText] = useState(props.text);

  useEffect(() => {
    console.log(returnTaggedString(props.text));
  }, []);

  return (
    <div id="tutorial_comment">
      <h3 id="tutorial_comment_username">{props.username}</h3>
      <p id="tutorial_comment_text">{text}</p>
      <h4 id="tutorial_comment_timestamp">
        Posted at {returnDate(props.timestamp)}
      </h4>
    </div>
  );
};

export default IndividualComment;
