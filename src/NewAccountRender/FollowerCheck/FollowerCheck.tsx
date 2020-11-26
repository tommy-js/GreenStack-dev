import React, { useState } from "react";
import { Check } from "../Check/Check";
import { selectedFollower } from "./index";

type FollowerCheckItem = {
  name: string;
  text: string;
  classification: string;
  selected: boolean;
  index: number;
};

interface Props {
  setCurrentIndex: (index: number) => void;
}

export const FollowerCheck: React.FC<Props> = (props) => {
  const [followers, setFollowers] = useState([
    {
      name: "Tommy",
      text: "Stonks only go up",
      classification: "Memes",
      selected: true,
      index: 0,
    },
    {
      name: "James Harding",
      text:
        "The technical analysis shows a PE ratio of 65, making this stock highly overvalued",
      classification: "Analytical",
      selected: false,
      index: 1,
    },
    {
      name: "Conway",
      text:
        "The PE ratio compares a stock's current share price against its per-share earnings. This helps investors better understand whether or not the company is overvalued",
      classification: "Educational",
      selected: false,
      index: 2,
    },
  ]);

  function modIndex(index: number) {
    let selected = selectedFollower(followers, index);
    setFollowers(selected);
    props.setCurrentIndex(index);
  }

  return (
    <React.Fragment>
      {followers.map((el: FollowerCheckItem) => (
        <Check
          key={el.index}
          name={el.name}
          text={el.text}
          classification={el.classification}
          selected={el.selected}
          index={el.index}
          modIndex={modIndex}
        />
      ))}
    </React.Fragment>
  );
};
