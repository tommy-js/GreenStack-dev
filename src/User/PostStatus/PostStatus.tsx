import React from "react";

interface Props {
  likes: number;
  dislikes: number;
  timestamp: number;
  commentCount: number;
}

export const PostStatus: React.FC<Props> = (props) => {
  return (
    <div className="post_status">
      <p className="post_status_element">
        likes: {props.likes}, dislikes: {props.dislikes}
      </p>
      <p className="post_status_element">posted at {props.timestamp}</p>
      <p className="post_status_element">Comments: {props.commentCount}</p>
    </div>
  );
};
