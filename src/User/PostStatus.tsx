import React from "react";

interface Props {
  likes: number;
  dislikes: number;
  timestamp: number;
  commentCount: number;
}

const PostStatus: React.FC<Props> = ({
  likes,
  dislikes,
  timestamp,
  commentCount,
}: Props) => {
  return (
    <div className="post_status">
      <p className="post_status_element">
        likes: {likes}, dislikes: {dislikes}
      </p>
      <p className="post_status_element">posted at {timestamp}</p>
      <p className="post_status_element">Comments: {commentCount}</p>
    </div>
  );
};

export default PostStatus;
