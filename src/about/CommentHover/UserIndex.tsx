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
        <div className="transparent_outer">
          <div className="user_index_hover_block">
            <div className="user_index_hover_img_block">
              <img className="user_index_hover_img" src={props.profileImage} />
            </div>
            <p className="user_index_hover_username">{props.username}</p>
            <p className="user_index_hover_bio">{props.bio}</p>
          </div>
        </div>
      );
    } else return null;
  }

  return (
    <div
      className="user_comment_index"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="username_tag_block">
        <span className="username_tag">@{props.username}</span>
      </div>
      <div className="hover_comp">{returnHoverOver()}</div>
    </div>
  );
};

export default UserIndex;
