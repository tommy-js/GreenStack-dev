import React from "react";

interface Props {
  likes: number;
  dislikes: number;
  timestamp: number;
}

const PostStatus: React.FC<Props> = ({ likes, dislikes, timestamp }: Props) => {
  return (
    <div>
      <p>likes: {likes}</p>
      <p>dislikes: {dislikes}</p>
      <p>posted at {timestamp}</p>
    </div>
  );
};

export default PostStatus;
