import React from "react";

interface Props {
  type: string;
  user: string;
  comment: string;
  likes: number;
  dislikes: number;
  timestamp: number;
}

const ProfileActivityComment: React.FC<Props> = (props) => {
  return (
    <div id="profile_activity_container">
      <p>{props.timestamp}</p>
      <p>{props.user}</p>
      <p>{props.comment}</p>
      <p>
        {props.likes}/{props.dislikes}
      </p>
    </div>
  );
};

export default ProfileActivityComment;
