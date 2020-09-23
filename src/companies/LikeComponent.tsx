import React, { useState } from "react";
import LikeStockComment from "../resolvers/LikeStockComment";
import DislikeStockComment from "../resolvers/DislikeStockComment";

interface Props {
  likes: number;
  dislikes: number;
  commentId: number;
}

const LikeComponent: React.FC<Props> = (props) => {
  const [likeRatio, setLikeRatio] = useState(props.likes);
  const [dislikeRatio, setDislikeRatio] = useState(props.dislikes);

  return (
    <div>
      <p>
        {likeRatio} / {dislikeRatio}
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
