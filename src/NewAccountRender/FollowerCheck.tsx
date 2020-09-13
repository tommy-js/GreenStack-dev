import React, { useState } from "react";
import Check from "./Check";

const FollowerCheck: React.FC = () => {
  const [followers, setFollowers] = useState([
    { name: "Tommy", text: "Stonks only go up", classification: "Memes" },
    {
      name: "James Harding",
      text:
        "The technical analysis shows a PE ratio of 65, making this stock highly overvalued",
      classification: "Analytical",
    },
    {
      name: "Conway",
      text:
        "The PE ratio compares a stock's current share price against its per-share earnings. This helps investors better understand whether or not the company is overvalued",
      classification: "Educational",
    },
  ]);

  return (
    <div>
      {followers.map((el: any) => (
        <Check
          name={el.name}
          text={el.text}
          classification={el.classification}
        />
      ))}
    </div>
  );
};

export default FollowerCheck;
