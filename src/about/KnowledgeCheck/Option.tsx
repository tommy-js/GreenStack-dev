import React, { useState, useEffect } from "react";
import { SelectContainer } from "./SelectContainer";
import { SelectSubheader } from "./SelectSubheader";

interface Props {
  title: string;
  id: number;
  selectedOption: number;
  selectOption: (id: number) => void;
}

const Option: React.FC<Props> = (props) => {
  const [bcc, setBcc] = useState("white");

  useEffect(() => {
    if (props.id === props.selectedOption) {
      setBcc("#2bae66ff");
    } else {
      setBcc("white");
    }
  }, [props.selectedOption]);

  return (
    <div className="option">
      <SelectContainer
        id={props.id}
        bcc={bcc}
        selectOption={props.selectOption}
      />
      <SelectSubheader title={props.title} />
    </div>
  );
};

export default Option;
