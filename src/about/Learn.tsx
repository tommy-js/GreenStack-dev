import React, { useState, useContext, useEffect } from "react";
import LearnComponent from "./LearnComponent";
import LearnHeader from "./LearnHeader";
import LearnSidebar from "./LearnSidebar";

interface Props {
  progress: any;
}

const Learn: React.FC<Props> = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [learn, setLearn] = useState([
    {
      title: "Getting Started",
      subtitle: "Learn the market basics",
      path: "/about/learn/general",
      percent: 0,
    },
    {
      title: "What Are Options?",
      subtitle: "Learn all about calls and puts",
      path: "/about/learn/options",
      percent: 0,
    },
    {
      title: "What Is 'Diversification?'",
      subtitle: "Learn to protect yourself from the market",
      path: "/about/learn/protection",
      percent: 0,
    },
  ]);

  useEffect(() => {
    let obj;
    let arr = [...learn];
    for (let i = 0; i < learn.length; i++) {
      obj = {
        title: learn[i].title,
        subtitle: learn[i].subtitle,
        path: learn[i].path,
        percent: props.progress[i].percent,
      };
      arr[i] = obj;
    }
    setLearn(arr);
    setLoaded(true);
  }, []);

  function renderState() {
    if (loaded === true) {
      return (
        <div id="learn_state">
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

  return (
    <div id="learn_component">
      <LearnHeader header="Basics" />
      <div id="learn_sidebar_container">
        <LearnSidebar />
      </div>
      {renderState()}
    </div>
  );
};

export default Learn;
