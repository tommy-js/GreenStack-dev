import React from "react";

interface Data {
  title: string;
  text: string;
  likes: number;
  dislikes: number;
  timestamp: number;
  postId: number;
  comments: {
    userId: string;
    username: string;
    commentId: string;
    timestamp: number;
    text: string;
    likes: number;
    dislikes: number;
  };
}

interface Props {
  info: Data;
}

const PostRender: React.FC<Props> = (props) => {
  return (
    <div>
      <h2>{props.info.title}</h2>
      <p>{props.info.text}</p>
    </div>
  );
};

export default PostRender;
