import React from "react";

interface Props {
  postId: number;
  title: string;
}

const Like: React.FC<Props> = (props) => {
  return (
    <div key={props.postId} className="profile_like">
      <h3>{props.title}</h3>
    </div>
  );
};

export default Like;
