import React, { useState } from "react";
import LikeComponent from "./LikeComponent";
import { Link } from "react-router-dom";

interface Props {
  comment: string;
  likes: number;
  dislikes: number;
  tradeId: number;
  removeComment: (tradeId: number) => void;
}

const ProfileComments: React.FC<Props> = (props) => {
  const [displayObj, setDisplayObj] = useState("block");

  function removeComment() {
    props.removeComment(props.tradeId);
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
