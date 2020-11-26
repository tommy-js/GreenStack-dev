import React, { useState } from "react";
import { KCAcceptButton } from "../KCAcceptButton/KCAcceptButton";
import { KnowledgeCheckHeadline } from "../KnowledgeCheckHeadline/KnowledgeCheckHeadline";
import { KnowledgeCheckOptions } from "../KnowledgeCheckOptions/KnowledgeCheckOptions";

interface MC {
  options: {
    title: string;
    id: number;
  }[];
  id: string;
  specId: string;
  increment: number;
  headline: string;
  correctAnswer: number;
  currentProgress: number;
}

export const MultipleChoice: React.FC<MC> = (props) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [correct, setCorrect] = useState();
  const [answer, setAnswer] = useState();
  const [res, setRes] = useState();

  function modOption(id: number) {
    setSelectedOption(id);
    if (id === props.correctAnswer) setCorrect(true);
    else setCorrect(false);
  }

  function returnRes(ans: boolean) {
    setAnswer(ans);
    if (ans === true) setRes("Correct");
    else if (ans === false) setRes("Incorrect");
  }

  return (
    <div id="knowledge_check">
      <KnowledgeCheckHeadline headline={props.headline} res={res} />
      <KnowledgeCheckOptions options={props.options} modOption={modOption} />
      <KCAcceptButton
        id={props.id}
        specId={props.specId}
        increment={props.increment}
        correct={correct}
        currentProgress={props.currentProgress}
        returnRes={returnRes}
      />
    </div>
  );
};
