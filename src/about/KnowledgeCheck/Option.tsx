import React from "react";
import { SelectContainer } from "./SelectContainer";
import { SelectSubheader } from "./SelectSubheader";

interface Props {
  title: string;
  id: number;
  selectOption: (id: number) => void;
}

const Option: React.FC<Props> = (props) => {
  return (
    <div id="option">
      <SelectContainer id={props.id} selectOption={props.selectOption} />
      <SelectSubheader title={props.title} />
    </div>
  );
};

export default Option;
