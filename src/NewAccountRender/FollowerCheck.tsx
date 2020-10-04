import React, { useState } from "react";
import Check from "./Check";

interface Props {
  setCurrentIndex: (index: number) => void;
}

const FollowerCheck: React.FC<Props> = (props) => {
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
    let obj = followers[index];
    let follow = [...followers];
    follow.map((el: any) => (el.selected = false));
    obj = {
      ...followers[index],
      selected: true,
    };
    follow[index] = obj;
    setFollowers(follow);
    props.setCurrentIndex(index);
  }

  return (
    <div>
      {followers.map((el: any) => (
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
    </div>
  );
};

export default FollowerCheck;
