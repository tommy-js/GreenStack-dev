import React from "react";

interface Props {
  text: string;
}

const PostText: React.FC<Props> = ({ text }: Props) => {
  return <p>{text}</p>;
};

export default PostText;
