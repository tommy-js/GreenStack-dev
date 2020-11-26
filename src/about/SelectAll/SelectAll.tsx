import React, { useState } from "react";
import { KnowledgeCheckHeadline } from "../KnowledgeCheckHeadline/KnowledgeCheckHeadline";
import SelectBoxResolver from "../../resolvers/SelectBoxResolver";
import { KnowledgeCheckSelectBoxes } from "../KnowledgeCheckSelectBoxes/KnowledgeCheckSelectBoxes";

interface SelectAll {
  title: string;
  id: string;
  specId: string;
  increment: number;
  currentProgress: number;
  options: {
    id: number;
    title: string;
    selected: boolean;
    correct: boolean;
  }[];
}

export const SelectAll: React.FC<SelectAll> = (props) => {
  const [res, setRes] = useState();
  const [correct, setCorrect] = useState(false);

  function modAnswer(argument: any) {
    var checkSet = true;
    for (let i = 0; i < props.options.length; i++) {
      if (argument[i].selected != props.options[i].correct) {
        checkSet = false;
      }
      setCorrect(checkSet);
    }
  }

  function returnRes(ans: boolean) {
    if (ans === true) {
      setRes("Correct");
    } else if (ans === false) {
      setRes("Incorrect");
    }
  }

  return (
    <div id="knowledge_check">
      <KnowledgeCheckHeadline headline={props.title} res={res} />
      <KnowledgeCheckSelectBoxes
        options={props.options}
        modAnswer={modAnswer}
      />
      <SelectBoxResolver
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
