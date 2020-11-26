import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikeSubCommentMutation } from "../../queries/queries";
import dislike from "../../images/dislike.png";
import dislikeFilled from "../../images/dislike_filled.png";

interface Props {
  postId: string;
  commentId: string;
  parentCommentId: string;
  dislikeSubCommentMutation: (variables: object) => any;
}

const DislikeSubCommentMutation: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(dislike);

  function passData() {
    props
      .dislikeSubCommentMutation({
        variables: {
          postId: props.postId,
          commentId: props.commentId,
          parentCommentId: props.parentCommentId,
        },
      })
      .then((res: any) => {
        console.log(res);
        setImgColor(dislikeFilled);
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

export const DislikeSubComment = compose(
  graphql(dislikeSubCommentMutation, { name: "dislikeSubCommentMutation" })
)(DislikeSubCommentMutation);
