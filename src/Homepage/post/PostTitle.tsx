import React from "react";

interface Props {
  title: string;
}

const PostTitle: React.FC<Props> = ({ title }: Props) => {
  return <h2>{title}</h2>;
};

export default PostTitle;
