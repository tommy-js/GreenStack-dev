import React, { useState } from "react";
import LikeStockComment from "../resolvers/LikeStockComment";
import DislikeStockComment from "../resolvers/DislikeStockComment";

interface Props {
  likes: number;
  dislikes: number;
  commentId: string;
}

const LikeComponent: React.FC<Props> = (props) => {
  return (
    <div>
      <p>
        {props.likes} / {props.dislikes}
      </p>
      <LikeStockComment commentId={props.commentId} likes={props.likes} />
      <DislikeStockComment
        commentId={props.commentId}
        dislikes={props.dislikes}
      />
    </div>
  );
};

export default LikeComponent;
