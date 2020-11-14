import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likeCommentMutation } from "../queries/queries";
import like from "../images/like.png";

interface Props {
  postId: string;
  commentId: string;
  modLikes: () => void;
  likeCommentMutation: (variables: object) => any;
}

const LikePostComment: React.FC<Props> = (props) => {
  function passData() {
    props
      .likeCommentMutation({
        variables: {
          postId: props.postId,
          commentId: props.commentId,
        },
      })
      .then((res: any) => {
        console.log(res);
        props.modLikes();
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <div className="like_button_block" onClick={() => passData()}>
      <img className="like_button_image" src={like} />
    </div>
  );
};

export default compose(
  graphql(likeCommentMutation, { name: "likeCommentMutation" })
)(LikePostComment);
