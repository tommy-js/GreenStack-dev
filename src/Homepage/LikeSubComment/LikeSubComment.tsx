import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likeSubCommentMutation } from "../../queries/queries";
import like from "../../images/like.png";
import likeFilled from "../../images/like_filled.png";

interface Props {
  postId: string;
  commentId: string;
  parentCommentId: string;
  likeSubCommentMutation: (variables: object) => any;
}

const LikeSubCommentMutation: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(like);

  function passData() {
    props
      .likeSubCommentMutation({
        variables: {
          postId: props.postId,
          commentId: props.commentId,
          parentCommentId: props.parentCommentId,
        },
      })
      .then((res: any) => {
        console.log(res);
        setImgColor(likeFilled);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <div className="like_button_block" onClick={() => passData()}>
      <img className="like_button_image" src={imgColor} />
    </div>
  );
};

export const LikeSubComment = compose(
  graphql(likeSubCommentMutation, { name: "likeSubCommentMutation" })
)(LikeSubCommentMutation);
