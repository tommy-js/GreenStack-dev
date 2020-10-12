import React, { useState, useEffect } from "react";
import { KCHeadline } from "./KCHeadline";
import BlanksInput from "./BlanksInput";
import KCOptions from "./KCOptions";
import KCAcceptButton from "../../resolvers/KCAcceptButton";
import OnSubmitBlankModifyer from "./OnSubmitBlankModifyer";

interface MC {
  options: {
    title: string;
    id: number;
  }[];
  id: number;
  increment: number;
  headline: string;
  correctAnswer: number;
  currentProgress: number;
}

interface Blanks {
  options: {
    text: string;
    correctAnswer: string;
    id: number;
  }[];
}

export const MultipleChoice: React.FC<MC> = (props) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [correct, setCorrect] = useState();
  const [answer, setAnswer] = useState();
  const [res, setRes] = useState();

  function modOption(id: number) {
    setSelectedOption(id);
    if (id === props.correctAnswer) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }

  function returnRes(ans: boolean) {
    setAnswer(ans);
    if (ans === true) {
      setRes("Correct");
    } else if (ans === false) {
      setRes("Incorrect");
    }
  }

  return (
    <div id="knowledge_check">
      <KCHeadline headline={props.headline} res={res} />
      <KCOptions options={props.options} modOption={modOption} />
      <KCAcceptButton
        id={props.id}
        increment={props.increment}
        correct={correct}
        currentProgress={props.currentProgress}
        returnRes={returnRes}
      />
    </div>
  );
};

export const Blanks: React.FC<Blanks> = (props) => {
  const [correct, setCorrect] = useState([] as any);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let obj;
    let arr = [];
    for (let i = 0; i < props.options.length; i++) {
      obj = {
        id: props.options[i].id,
        correct: false,
      };
      arr.push(obj);
    }
    setCorrect(arr);
  }, []);

  function modCorrect(id: number, isCorrect: boolean) {
    let arr = [...correct];
    let foundArr = correct.find((el: any) => el.id === id);
    if (foundArr) {
      let ind = arr.indexOf(foundArr);
      if (isCorrect === true) {
        arr[ind].correct = true;
      } else if (isCorrect === false) {
        arr[ind].correct = false;
      }
      setCorrect(arr);
    }
  }

  useEffect(() => {
    console.log(correct);
  }, [correct]);

  return (
    <div id="knowledge_check">
      {props.options.map((el: any) => (
        <div>
          <BlanksInput
            text={el.text}
            id={el.id}
            correctAnswer={el.correctAnswer}
            modCorrect={modCorrect}
          />
          <OnSubmitBlankModifyer
            submitted={submitted}
            id={el.id}
            correct={correct}
          />
        </div>
      ))}
      <button onClick={() => setSubmitted(true)}>Submit</button>
    </div>
  );
};
