import React from "react";

interface Props {
  text: string;
}

export const PostText: React.FC<Props> = ({ text }: Props) => {
  return <p>{text}</p>;
};
