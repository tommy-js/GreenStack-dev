import React from "react";
import PostStatus from "./PostStatus";
import { Link } from "react-router-dom";

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
      <Link to={`/home/post/${props.postId}`}>
        <h2 className="user_profile_title">{props.title}</h2>
        <p className="user_profile_text">{props.text}</p>
      </Link>
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
