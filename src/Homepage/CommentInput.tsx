import React, { useState, useContext } from "react";
import PushCommentStock from "../resolvers/PushCommentStock";
import PushCommentPost from "../resolvers/PushCommentPost";
import PushCommentTrade from "../resolvers/PushCommentTrade";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  username: string;
  userId: any;
}

interface Post extends Redux {
  postId: string;
}

interface Stock extends Redux {
  stockId: string;
}

interface Trade extends Redux {
  tradeId: string;
}

const CommentInputPost: React.FC<Post> = (props) => {
  const [text, setText] = useState("");

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" onChange={(e) => setText(e.target.value)} />
      <PushCommentPost
        username={props.username}
        userId={props.userId}
        postId={props.postId}
        text={text}
      />
    </div>
  );
};

const CommentInputStock: React.FC<Stock> = (props) => {
  const [text, setText] = useState("");

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" />
      <PushCommentStock
        username={props.username}
        userId={props.userId}
        stockId={props.stockId}
        text={text}
      />
    </div>
  );
};

const CommentInputTrade: React.FC<Trade> = (props) => {
  const [text, setText] = useState("");

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" />
      <PushCommentTrade
        username={props.username}
        userId={props.userId}
        tradeId={props.tradeId}
        text={text}
      />
    </div>
  );
};

export const InputPost = connect(mapStateToProps)(CommentInputPost);
export const InputStock = connect(mapStateToProps)(CommentInputStock);
export const InputTrade = connect(mapStateToProps)(CommentInputTrade);
