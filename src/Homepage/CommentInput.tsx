import React, { useState, useContext } from "react";
import PushCommentStock from "../resolvers/PushCommentStock";
import PushCommentPost from "../resolvers/PushCommentPost";
import PushCommentTrade from "../resolvers/PushCommentTrade";
import { userContext } from "../AppMain/App";

interface Post {
  postId: string;
}

interface Stock {
  stockId: string;
}

interface Trade {
  tradeId: string;
}

export const CommentInputPost: React.FC<Post> = (props) => {
  const [text, setText] = useState("");
  const { userVal, setUserVal } = useContext(userContext);

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" onChange={(e) => setText(e.target.value)} />
      <PushCommentPost
        username={userVal.username}
        userId={userVal.userId}
        postId={props.postId}
        text={text}
      />
    </div>
  );
};

export const CommentInputStock: React.FC<Stock> = (props) => {
  const [text, setText] = useState("");
  const { userVal, setUserVal } = useContext(userContext);

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" />
      <PushCommentStock
        username={userVal.username}
        userId={userVal.userId}
        stockId={props.stockId}
        text={text}
      />
    </div>
  );
};

export const CommentInputTrade: React.FC<Trade> = (props) => {
  const [text, setText] = useState("");
  const { userVal, setUserVal } = useContext(userContext);

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" />
      <PushCommentTrade
        username={userVal.username}
        userId={userVal.userId}
        tradeId={props.tradeId}
        text={text}
      />
    </div>
  );
};
