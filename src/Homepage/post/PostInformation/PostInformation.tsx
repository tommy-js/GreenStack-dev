import React from "react";

interface Props {
  likes: number;
  dislikes: number;
  timestamp: number;
}

export const PostInformation: React.FC<Props> = ({
  likes,
  dislikes,
  timestamp,
}: Props) => {
  return (
    <div>
      <p>Likes: {likes}</p>
      <p>Dislikes: {dislikes}</p>
      <p>Posted at {timestamp}</p>
    </div>
  );
};
