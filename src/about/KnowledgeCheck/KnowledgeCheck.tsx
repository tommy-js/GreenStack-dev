import React, { useState, useEffect } from "react";
import { KCHeadline } from "./KCHeadline";
import BlanksInput from "./BlanksInput";
import KCOptions from "./KCOptions";
import KCAcceptButton from "../../resolvers/KCAcceptButton";
import BlankSubmit from "../../resolvers/BlankSubmit";
import OnSubmitBlankModifyer from "./OnSubmitBlankModifyer";
import KCSelectBoxes from "./KCSelectBoxes";

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

interface Blanks {
  title: string;
  id: string;
  specId: string;
  options: {
    text: string;
    correctAnswer: string;
    value: number;
    id: number;
  }[];
}

interface SelectAll {
  title: string;
  options: {
    id: number;
    title: string;
    selected: boolean;
  }[];
  correctAnswers: {
    id: number;
  }[];
}

export const SelectAll: React.FC<SelectAll> = (props) => {
  const [res, setRes] = useState();
  const [answer, setAnswer] = useState(props.options);
  const [correct, setCorrect] = useState(false);

  function modAnswer(argument: any) {}

  return (
    <div id="knowledge_check">
      <KCHeadline headline={props.title} res={res} />
      <KCSelectBoxes options={props.options} modAnswer={modAnswer} />
    </div>
  );
};

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
        specId={props.specId}
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
  const [increment, setIncrement] = useState(0);

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
      let reducer = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].correct === true) reducer += props.options[i].value;
      }
      setIncrement(reducer);
      console.log(reducer);
    }
  }

  function modSubmitted(set: boolean) {
    setSubmitted(set);
  }

  useEffect(() => {
    console.log(correct);
  }, [correct]);

  return (
    <div id="knowledge_check">
      <h3 className="blanks_title">{props.title}</h3>
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
      <BlankSubmit
        id={props.id}
        specId={props.specId}
        increment={increment}
        submit={modSubmitted}
      />
    </div>
  );
};
