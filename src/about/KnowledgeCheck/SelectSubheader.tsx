import React from "react";

interface Props {
  title: string;
}

export const SelectSubheader: React.FC<Props> = (props) => {
  return <p className="select_subheader">{props.title}</p>;
};
