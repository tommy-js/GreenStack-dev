import React, { useState } from "react";
import { KCHeadline } from "./KCHeadline";
import KCOptions from "./KCOptions";
import KCAcceptButton from "../../resolvers/KCAcceptButton";

interface Props {
  options: {
    title: string;
    id: number;
  }[];
  id: number;
  progressOnComplete: number;
  headline: string;
  correctAnswer: number;
  currentProgress: number;
}

export const MultipleChoice: React.FC<Props> = (props) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [correct, setCorrect] = useState(false);

  function modOption(id: number) {
    setSelectedOption(id);
    if (id === props.correctAnswer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }

  return (
    <div id="knowledge_check">
      <KCHeadline headline={props.headline} />
      <KCOptions options={props.options} modOption={modOption} />
      <KCAcceptButton
        id={props.id}
        progressOnComplete={props.progressOnComplete}
        correct={correct}
        currentProgress={props.currentProgress}
      />
    </div>
  );
};
