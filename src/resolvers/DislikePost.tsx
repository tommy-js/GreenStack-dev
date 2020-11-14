import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikePostMutation } from "../queries/queries";
import dislike from "../images/dislike.png";

interface Props {
  userId: string;
  postId: string;
  modDislikes: () => void;
  dislikePostMutation: (variables: object) => any;
}

const DislikePost: React.FC<Props> = (props) => {
  console.log("dislikes posts mutation postId: " + props.postId);
  function passData() {
    props
      .dislikePostMutation({
        variables: {
          userId: props.userId,
          postId: props.postId,
          content: "A user disliked your post",
        },
      })
      .then((res: any) => {
        console.log("passed");
        props.modDislikes();
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
)(DislikePost);
