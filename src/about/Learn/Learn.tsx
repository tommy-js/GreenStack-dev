import React, { useState, useEffect } from "react";
import { LearnComponent } from "../LearnComponent/LearnComponent";
import { LearnHeader } from "../LearnHeader/LearnHeader";
import { LearnSidebar } from "../LearnSidebar/LearnSidebar";
import { ProgressItem } from "../../types/types";
import { returnLearn } from "./index";

interface Props {
  progress: ProgressItem[];
}

export const Learn: React.FC<Props> = (props) => {
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
    let learnArray = returnLearn(learn, props.progress);
    setLearn(learnArray);
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
