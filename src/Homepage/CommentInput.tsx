import React, { useState, useContext } from "react";
import PushComment from "../resolvers/PushComment";
import { userContext } from "../AppMain/App";

const CommentInput: React.FC = () => {
  const [text, setText] = useState("");
  const { userVal, setUserVal } = useContext(userContext);

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" />
      <PushComment
        username={userVal.username}
        userId={userVal.userId}
        text={text}
      />
    </div>
  );
};

export default CommentInput;
