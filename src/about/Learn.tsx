import React, { useState, useContext, useEffect } from "react";
import LearnComponent from "./LearnComponent";
import { Route } from "react-router-dom";
import { userContext } from "../AppMain/App";

const Learn: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);
  const [loaded, setLoaded] = useState(false);
  const [learn, setLearn] = useState([
    {
      title: "Stocks",
      subtitle: "Learn the market basics",
      path: "/about/learn/general",
      percent: 0,
    },
    {
      title: "Options",
      subtitle: "Learn all about calls and puts",
      path: "/about/learn/options",
      percent: 0,
    },
    {
      title: "Protecting Yourself",
      subtitle: "Learn to protect yourself from the market",
      path: "/about/learn/protection",
      percent: 0,
    },
  ]);

  useEffect(() => {
    console.log("calling useffect on Learn comp");
    let obj;
    let arr = [...learn];
    for (let i = 0; i < learn.length; i++) {
      obj = {
        title: learn[i].title,
        subtitle: learn[i].subtitle,
        path: learn[i].path,
        percent: userVal.progress[i].percent,
      };
      arr[i] = obj;
    }
    setLearn(arr);
    setLoaded(true);
  }, []);

  function renderState() {
    if (loaded === true) {
      return (
        <div>
          {learn.map((el) => (
            <LearnComponent
              key={el.title}
              title={el.title}
              subtitle={el.subtitle}
              path={el.path}
              percent={el.percent}
            />
          ))}
        </div>
      );
    } else {
      return null;
    }
  }

  return <div id="learn_component">{renderState()}</div>;
};

export default Learn;
