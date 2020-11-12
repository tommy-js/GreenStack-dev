import React, { useState } from "react";
import PushCommentStock from "../resolvers/PushCommentStock";
import PushCommentPost from "../resolvers/PushCommentPost";
import PushCommentTrade from "../resolvers/PushCommentTrade";

interface Post {
  userId: string;
  postId: string;
  allowComments: boolean;
}

interface Stock {
  userId: string;
  stockId: string;
}

interface Trade {
  userId: string;
  tradeId: string;
}

export const InputPost: React.FC<Post> = (props) => {
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

export const InputStock: React.FC<Stock> = (props) => {
  const [text, setText] = useState("");

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" />
      <PushCommentStock
        userId={props.userId}
        stockId={props.stockId}
        text={text}
      />
    </div>
  );
};

export const InputTrade: React.FC<Trade> = (props) => {
  const [text, setText] = useState("");

  return (
    <div id="comment_input_div">
      <textarea id="comment_input" />
      <PushCommentTrade
        userId={props.userId}
        tradeId={props.tradeId}
        text={text}
      />
    </div>
  );
};
