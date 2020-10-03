import React from "react";

interface Props {
  userId: string;
  username: string;
  commentId: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
}

const IndividualPostComment: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.userId}</p>
    </div>
  );
};

export default IndividualPostComment;
