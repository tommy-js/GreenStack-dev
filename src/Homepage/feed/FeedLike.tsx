import React from "react";

type Reference = {
  postId: string;
  text: string;
};

interface Props {
  username: string;
  profileImage: string;
  text: string;
  reference: Reference;
  modPostLoad: (postId: string) => void;
}

const FeedLike: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.text}</p>
      <p>{props.reference.text}</p>
    </div>
  );
};

export default FeedLike;
