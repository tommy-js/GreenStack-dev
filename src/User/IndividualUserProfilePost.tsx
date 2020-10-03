import React from "react";

interface Props {
  postId: number;
}

const IndividualUserProfilePost: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.postId}</p>
    </div>
  );
};

export default IndividualUserProfilePost;
