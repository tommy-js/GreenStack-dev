import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likePostMutation } from "../queries/queries";
import like from "../images/like.png";
import likeFilled from "../images/like_filled.png";

interface Props {
  postId: string;
  postUsername: string;
  userId: string;
  modLikes?: () => void;
  likePostMutation: (variables: object) => any;
}

const LikePost: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(like);

  function passData() {
    let token = sessionStorage.getItem("Token");

    props
      .likePostMutation({
        variables: {
          token: token,
          userId: props.userId,
          postId: props.postId,
          content: `${props.postUsername} liked your post`,
          likeText: `Liked a post submitted by ${props.postUsername}`,
        },
      })
      .then((res: any) => {
        console.log(res);
        if (props.modLikes) props.modLikes();
        setImgColor(likeFilled);
        console.log("logging from LikePost");
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

export default compose(graphql(likePostMutation, { name: "likePostMutation" }))(
  LikePost
);
