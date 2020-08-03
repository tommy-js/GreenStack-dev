import React from "react";

interface Props {
  text: string;
  passFunction: () => void;
}

const StandardButton: React.FC<Props> = (props) => {
  return <button onClick={() => props.passFunction()}>{props.text}</button>;
};

export default StandardButton;
