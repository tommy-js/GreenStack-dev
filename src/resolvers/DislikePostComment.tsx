import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikePostMutation } from "../queries/queries";
import dislike from "../images/dislike.png";

interface Props {
  postId: string;
  commentId: string;
  dislikePostMutation: (variables: object) => any;
}

const DislikePostComment: React.FC<Props> = (props) => {
  console.log("dislikes posts mutation postId: " + props.postId);
  console.log("dislikes posts mutation commentId: " + props.commentId);
  function passData() {
    props
      .dislikePostMutation({
        variables: {
          postId: props.postId,
          commentId: props.commentId,
        },
      })
      .then((res: any) => {
        console.log("passed");
        console.log("postId: " + props.postId);
        console.log("commentId: " + props.commentId);
      })
      .catch((err: any) => {
        console.log("error");
      });
  }

  return (
    <div className="like_button_block" onClick={() => passData()}>
      <img className="like_button_image" src={dislike} />
    </div>
  );
};

export default compose(
  graphql(dislikePostMutation, { name: "dislikePostMutation" })
)(DislikePostComment);
