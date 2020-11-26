import React, { useState } from "react";
import { PushCommentStock } from "../PushCommentStock/PushCommentStock";

interface Stock {
  userId: string;
  stockId: string;
}

export const CommentInputStock: React.FC<Stock> = (props) => {
  const [text, setText] = useState("");

  return (
    <div id="comment_input_div">
      <textarea
        id="comment_input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <PushCommentStock
        userId={props.userId}
        stockId={props.stockId}
        text={text}
      />
    </div>
  );
};
