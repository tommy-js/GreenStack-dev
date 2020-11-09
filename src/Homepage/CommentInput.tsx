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
  allowComments: boolean;
}

interface Stock extends Redux {
  stockId: string;
}

interface Trade extends Redux {
  tradeId: string;
}

const CommentInputPost: React.FC<Post> = (props) => {
  const [text, setText] = useState("");
  console.log("comment_input textarea: ");
  console.log(props.allowComments);

  function modText(input: string) {
    if (input.length < 180) {
      setText(input);
      console.log(input.length);
    }
  }

  function returnHiddenTextarea() {
    if (props.allowComments === false) {
      return (
        <textarea
          id="comment_input"
          value="This user has disabled comment submission."
          disabled={true}
        />
      );
    } else if (props.allowComments === true) {
      return (
        <div>
          <textarea
            id="comment_input"
            value={text}
            onChange={(e) => modText(e.target.value)}
          />
          <PushCommentPost
            userId={props.userId}
            postId={props.postId}
            text={text}
          />
        </div>
      );
    }
  }

  return <div id="comment_input_div">{returnHiddenTextarea()}</div>;
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
