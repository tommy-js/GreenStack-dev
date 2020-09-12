import React from "react";
import TickerList from "./TickerList";

export const PageOne: React.FC = () => {
  return (
    <div>
      <p>How new to the stock market are you?</p>
      <select>
        <option>Brand new</option>
        <option>Pretty fresh</option>
        <option>I've been around a while</option>
        <option>I'm very knowledgable</option>
        <option>I'm an expert</option>
      </select>
      <p>What best describes you?</p>
      <select>
        <option>I'm in middle school</option>
        <option>I'm in high-school</option>
        <option>I'm in college</option>
        <option>I'm not in school</option>
      </select>
      <p>Why are you using this app?</p>
      <select>
        <option>For the memes</option>
        <option>To find new stocks</option>
        <option>To learn without risk</option>
        <option>To learn how to trade</option>
      </select>
    </div>
  );
};

export const PageTwo: React.FC = () => {
  return (
    <div>
      <p>Which stocks here interest you?</p>
      <TickerList />
    </div>
  );
};
