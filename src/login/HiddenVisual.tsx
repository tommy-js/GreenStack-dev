import React from "react";

interface Props {
  opac: number;
  text: string;
}

const HiddenVisual: React.FC<Props> = (props) => {
  return <p style={{ opacity: props.opac }}>{props.text}</p>;
};

export default HiddenVisual;
