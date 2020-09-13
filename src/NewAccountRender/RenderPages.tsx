import React from "react";
import TickerList from "./TickerList";
import FollowerCheck from "./FollowerCheck";

interface Props {
  id: number;
  nextPage: (id: number) => void;
  backPage: (id: number) => void;
}

interface Submission extends Props {
  submit: () => void;
}

export const PageOne: React.FC<Props> = (props) => {
  return (
    <div>
      <p className="user_init_questions">
        How new to the stock market are you?
      </p>
      <select>
        <option>Brand new</option>
        <option>Pretty fresh</option>
        <option>I've been around a while</option>
        <option>I'm very knowledgable</option>
        <option>I'm an expert</option>
      </select>
      <p className="user_init_questions">What best describes you?</p>
      <select>
        <option>I'm in middle school</option>
        <option>I'm in high-school</option>
        <option>I'm in college</option>
        <option>I'm not in school</option>
      </select>
      <p className="user_init_questions">Why are you using this app?</p>
      <select>
        <option>For the memes</option>
        <option>To find new stocks</option>
        <option>To learn without risk</option>
        <option>To learn how to trade</option>
      </select>
      <button onClick={() => props.nextPage(props.id)}>Next</button>
    </div>
  );
};

export const PageTwo: React.FC<Props> = (props) => {
  return (
    <div>
      <p className="user_init_questions">Which stocks here interest you?</p>
      <TickerList />
      <button onClick={() => props.backPage(props.id)}>Back</button>
      <button onClick={() => props.nextPage(props.id)}>Next</button>
    </div>
  );
};

export const PageThree: React.FC<Submission> = (props) => {
  return (
    <div>
      <p className="user_init_questions">
        What kind of commentary are you looking for from those you follow?
      </p>
      <FollowerCheck />
      <button onClick={() => props.backPage(props.id)}>Back</button>
      <button onClick={() => props.submit()}>Submit and get started</button>
    </div>
  );
};
