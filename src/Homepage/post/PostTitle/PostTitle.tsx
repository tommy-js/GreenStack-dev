import React from "react";

interface Props {
  title: string;
}

export const PostTitle: React.FC<Props> = ({ title }: Props) => {
  return <h2>{title}</h2>;
};
