import React from "react";
import PostStatus from "./PostStatus";

interface Props {
  postId: number;
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  timestamp: number;
  commentCount: number;
}

const IndividualUserProfilePost: React.FC<Props> = (props) => {
  return (
    <div className="user_profile_post">
      <h2 className="user_profile_title">{props.title}</h2>
      <p className="user_profile_text">{props.text}</p>
      <PostStatus
        likes={props.likes}
        dislikes={props.dislikes}
        timestamp={props.timestamp}
        commentCount={props.commentCount}
      />
    </div>
  );
};

export default IndividualUserProfilePost;
