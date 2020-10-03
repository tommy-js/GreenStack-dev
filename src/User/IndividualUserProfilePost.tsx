import React from "react";
import PostStatus from "./PostStatus";

interface Props {
  postId: number;
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  timestamp: number;
}

const IndividualUserProfilePost: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <PostStatus
        likes={props.likes}
        dislikes={props.dislikes}
        timestamp={props.timestamp}
      />
    </div>
  );
};

export default IndividualUserProfilePost;
