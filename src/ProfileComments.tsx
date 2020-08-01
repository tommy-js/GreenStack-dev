import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  comment: string;
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
      <button onClick={() => removeComment()}>Delete</button>
    </div>
  );
};

export default ProfileComments;
