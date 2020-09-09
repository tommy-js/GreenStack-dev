import React, { useEffect, useContext } from "react";
import NavBar from "../misc/NavBar";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

export const BasicsPage: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);

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
      <h2 className="learn_page_header">ETFs and Index Funds</h2>
      <p className="learn_page_paragraph"></p>
    </div>
  );
};
