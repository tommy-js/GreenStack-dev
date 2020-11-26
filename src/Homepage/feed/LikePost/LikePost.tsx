import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likePostMutation } from "../../../queries/queries";
import like from "../../../images/like.png";
import likeFilled from "../../../images/like_filled.png";

interface Props {
  postId: string;
  postUsername: string;
  userId: string;
  modLikes?: () => void;
  likePostMutation: (variables: object) => any;
}

const LikePostRender: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(like);

  function passData() {
    props
      .likePostMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
          userId: props.userId,
          postId: props.postId,
          content: `${props.postUsername} liked your post`,
          likeText: `Liked a post submitted by ${props.postUsername}`,
        },
      })
      .then(() => {
        if (props.modLikes) props.modLikes();
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

export const LikePost = compose(
  graphql(likePostMutation, { name: "likePostMutation" })
)(LikePostRender);
