import React from "react";

interface Props {
  id: number;
  selectOption: (id: number) => void;
}

export const SelectContainer: React.FC<Props> = (props) => {
  return (
    <div
      id="select_container"
      onClick={() => props.selectOption(props.id)}
    ></div>
  );
};
