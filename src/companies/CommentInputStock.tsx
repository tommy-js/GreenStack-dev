import React, { useState } from "react";
import AddCommentToStock from "../resolvers/AddCommentToStock";

interface Props {
  stockId: string;
}

const CommentInputStock: React.FC<Props> = (props) => {
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
      <AddCommentToStock
        passFunc={passFunc}
        stockId={props.stockId}
        text={text}
      />
    </div>
  );
};

export default CommentInputStock;
