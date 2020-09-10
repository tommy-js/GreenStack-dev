import React, { useState } from "react";
import { KCHeadline } from "./KCHeadline";
import KCOptions from "./KCOptions";
import KCAcceptButton from "../../resolvers/KCAcceptButton";

interface Props {
  options: {
    title: string;
    id: number;
  }[];
  headline: string;
}

export const MultipleChoice: React.FC<Props> = (props) => {
  const [selectedOption, setSelectedOption] = useState(0);

  function modOption(id: number) {
    setSelectedOption(id);
  }

  return (
    <div id="knowledge_check">
      <KCHeadline headline={props.headline} />
      <KCOptions options={props.options} modOption={modOption} />
      <KCAcceptButton />
    </div>
  );
};
