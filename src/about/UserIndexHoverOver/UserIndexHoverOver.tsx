import React from "react";

interface Props {
  highlightProfileImage: string;
  highlightUsername: string;
  highlightBio: string;
}

export const UserIndexHoverOver: React.FC<Props> = (props) => {
  return (
    <div className="transparent_outer">
      <div className="user_index_hover_block">
        <div className="user_index_hover_img_block">
          <img
            className="user_index_hover_img"
            src={props.highlightProfileImage}
          />
        </div>
        <p className="user_index_hover_username">{props.highlightUsername}</p>
        <p className="user_index_hover_bio">{props.highlightBio}</p>
      </div>
    </div>
  );
};
