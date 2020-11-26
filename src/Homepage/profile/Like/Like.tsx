import React from "react";

interface Props {
  postId: string;
  title: string;
}

export const Like: React.FC<Props> = (props) => {
  return (
    <h3 key={props.postId} className="profile_like">
      {props.title}
    </h3>
  );
};
