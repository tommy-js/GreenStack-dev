import React, { useState } from "react";

interface Props {
  username: string;
  userId: string;
  bio: string;
  profileImage: string;
}

const UserIndex: React.FC<Props> = (props) => {
  const [hovered, setHovered] = useState(false);

  function returnHoverOver() {
    if (hovered === true) {
      return (
        <div className="user_index_hover_block">
          <p>hello world</p>
          <img src={props.profileImage} />
          <p>{props.bio}</p>
        </div>
      );
    } else return null;
  }

  return (
    <div
      className="user_comment_index"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {returnHoverOver()}
      <span>@{props.username}</span>
    </div>
  );
};

export default UserIndex;
