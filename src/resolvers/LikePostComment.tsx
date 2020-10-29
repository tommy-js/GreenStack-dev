import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likePostMutation } from "../queries/queries";

interface Props {
  postId: string;
  commentId: string;
  likePostMutation: (variables: object) => void;
}

const LikePostComment: React.FC<Props> = (props) => {
  function passData() {
    props.likePostMutation({
      variables: {
        postId: props.postId,
        commentId: props.commentId,
      },
    });
  }

  return <button onClick={() => passData()}>Like</button>;
};

export default compose(graphql(likePostMutation, { name: "likePostMutation" }))(
  LikePostComment
);
