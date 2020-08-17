import React, { useState } from "react";
import LikeComponent from "../misc/LikeComponent";
import { Link } from "react-router-dom";

interface Props {
  comment: string;
  commentId: number;
  userId: number;
  username: string;
  likes: number;
  dislikes: number;
  tradeId: number;
  removeComment: (commentId: number, userId: number, stockId: number) => void;
}

const ProfileComments: React.FC<Props> = (props) => {
  const [displayObj, setDisplayObj] = useState("block");

  function removeComment() {
    props.removeComment(props.commentId, props.userId, props.tradeId);
    setDisplayObj("none");
  }

  return (
    <div style={{ display: displayObj }}>
      <Link to={`/trade/${props.tradeId}`}>
        <p>{props.comment}</p>
      </Link>
      <LikeComponent likes={props.likes} dislikes={props.dislikes} />
      <button onClick={() => removeComment()}>Delete</button>
    </div>
  );
};

export default ProfileComments;
