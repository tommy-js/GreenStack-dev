import React, { useState } from "react";
import AddCommentToTrade from "./resolvers/AddCommentToTrade";

interface Props {
  tradeId: number;
}

const CommentInput: React.FC<Props> = (props) => {
  const [passFunc, setPassFunc] = useState(false);
  const [text, setText] = useState("");

  function onSub() {
    setPassFunc(true);
  }

  return (
    <div id="comment_input">
      <textarea
        id="comment_textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onSub()}>Submit</button>
      <AddCommentToTrade
        passFunc={passFunc}
        tradeId={props.tradeId}
        text={text}
      />
    </div>
  );
};

export default CommentInput;
