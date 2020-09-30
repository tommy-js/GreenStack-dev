import React, { useState, useEffect, useContext } from "react";
import NavBar from "../navigation/NavBar";
import { MultipleChoice } from "./KnowledgeCheck/KnowledgeCheck";
import { statusContext, userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

export const BasicsPage: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [id, setId] = useState(userVal.progress[0].id);
  const [currentProgress, setCurrentProgress] = useState(
    userVal.progress[0].percent
  );

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <h2 className="learn_page_header">Your First Steps</h2>
      <p className="learn_page_paragraph">
        Getting involved with the stock market can be intimidating, especially
        for those without a background in or good understand of the economy and
        finance more generally. Fortunately, it doesn't have to be so difficult.
        In this short tutorial we will break down the basics of the stock market
        into terms that are easy to understand.
      </p>
      <h3 className="learn_page_subheader">
        Note: complete the knowledge check to save your progress!
      </h3>
      <MultipleChoice
        options={[
          { title: "Option 1", id: 0 },
          { title: "Option 2", id: 1 },
          { title: "Option 3", id: 2 },
        ]}
        id={id}
        progressOnComplete={5}
        correctAnswer={2}
        currentProgress={currentProgress}
        headline="Test Knowledge Check"
      />
    </div>
  );
};

export const OptionsPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h2 className="learn_page_header">The Basics of Options</h2>
      <p className="learn_page_paragraph">
        Most people interested the stock market have heard of buying shares and
        know what it means to invest in a company. However, there is a whole
        world out there within the stock market that most people aren't aware
        of. One of these terms you may be unfamiliar with is that of "options,"
        which is a fancy way of saying that owning an option contract gives you
        the <i>option</i> to buy or sell a number of shares at a certain time.
      </p>
    </div>
  );
};

export const EtfPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h2 className="learn_page_header">ETFs and Index Funds</h2>
      <p className="learn_page_paragraph"></p>
    </div>
  );
};

export const ProtectionPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <h2 className="learn_page_header">
        How To Protect Yourself In The Market
      </h2>
      <p className="learn_page_paragraph">
        The stock market can be a volatile place, and many traders have lost
        fortunes through not protecting themselves well enough. In this tutorial
        we'll give you some pointers for how to avoid losing everything.
      </p>
    </div>
  );
};
