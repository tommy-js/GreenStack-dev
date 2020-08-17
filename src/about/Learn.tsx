import React from "react";
import LearnComponent from "./LearnComponent";
import { Route } from "react-router-dom";

const Learn: React.FC = () => {
  const learn = [
    {
      title: "Stocks",
      subtitle: "Learn the market basics",
      path: "/about/learn/general",
    },
    {
      title: "Options",
      subtitle: "Learn all about calls and puts",
      path: "/about/learn/options",
    },
  ];

  return (
    <div id="learn_component">
      {learn.map((el) => (
        <LearnComponent
          title={el.title}
          subtitle={el.subtitle}
          path={el.path}
        />
      ))}
    </div>
  );
};

export default Learn;
