import React from "react";

interface Props {
  title: string;
}

export const OwnedElement: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.title}</p>
    </div>
  );
};
