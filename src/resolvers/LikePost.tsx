import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likePostMutation } from "../queries/queries";
import like from "../images/like.png";

interface Props {
  userId: string;
  postId: string;
  modLikes: () => void;
  likePostMutation: (variables: object) => any;
}

const LikePost: React.FC<Props> = (props) => {
  function passData() {
    props
      .likePostMutation({
        variables: {
          userId: props.userId,
          postId: props.postId,
          content: "A user liked your post",
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

export default compose(graphql(likePostMutation, { name: "likePostMutation" }))(
  LikePost
);
