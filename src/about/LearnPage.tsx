import React, { useState, useEffect, useContext } from "react";
import NavBar from "../navigation/NavBar";
import { MultipleChoice, Blanks } from "./KnowledgeCheck/KnowledgeCheck";
import LearnGraphs from "./LearnGraphs.jsx";
import { statusContext, userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { generalData } from "./graphs/graphData.js";

export const BasicsPage: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [id, setId] = useState(userVal.progress[0].id);
  const [currentProgress, setCurrentProgress] = useState(
    userVal.progress[0].percent
  );
  const [specId, setSpecId] = useState(userVal.progress[0].progressElements);

  const options1 = {
    title: "Checkpoint 1",
    options: [
      {
        text:
          "What percent would you rate tdwa dmwkmad mwaflkwlka dkwlafllegpl fla l;w,al dmlwma his stock is in terms of buy?",
        correctAnswer: "Yes",
        value: 2,
        id: 0,
      },
      { text: "Test 2", correctAnswer: "No", value: 9, id: 1 },
    ],
  };

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div className="learn_page">
        <h2 className="learn_page_header">Getting Started</h2>

        <p className="learn_page_paragraph">
          Getting involved in the stock market can be intimidating, especially
          for those without a deep understanding of how the economy works.
          Fortunately, it doesn't have to be so difficult. In this short
          tutorial we'll break down the basics of the stock market into terms
          that are easy to understand.
        </p>
        <p className="learn_page_paragraph">
          At its most basic, the stock market is composed of companies and their
          investors(that's you!). Investors purchase portions of companies,
          called shares, which fluctuate in value depending on how a company is
          doing. It's your hope as an investor that the value of these shares
          increase over time, so that you can sell them for a profit somewhere
          down the line.
        </p>
        <p className="learn_page_paragraph">
          Let's take a look at some historical Apple stock data to see how this
          might work.
        </p>

        <LearnGraphs
          points={generalData.points}
          graphicalEffects={generalData.graphicalEffects}
        />

        <p className="learn_page_paragraph">
          The graph above is Apple stock-price data from March 1, 2019 to May
          30, 2019. You can see that if you had purchased a share at the
          beginning of this timeframe, by the end of May the value of your share
          would have increased from $43.74 to $50.17. Selling this share would
          have made you $6.43!
        </p>

        <h3 className="learn_page_notif">
          Complete the knowledge check to save your progress!
        </h3>
        <MultipleChoice
          options={[
            { title: "A portion of your portfolio", id: 0 },
            { title: "A small piece of a company", id: 1 },
            { title: "Something to brag about!", id: 2 },
          ]}
          id={id}
          specId={userVal.progress[0].progressElements[0].id}
          increment={5}
          correctAnswer={1}
          currentProgress={currentProgress}
          headline="What is a share?"
        />

        <p className="learn_page_paragraph">
          Of course, $6.43 isn't much money. However, this brings us to one of
          the most common and successful investment strategies.
        </p>
        <p className="learn_page_subheader">Buy, hold, buy more</p>
        <p className="learn_page_paragraph">
          The goal of most investors is to make small gains slowly over time,
          and to therefore increase the value of their investment significantly
          over a period of years. $1,000 invested into Amazon stock, AMZN, in
          June of 2010 would have been worth $26.771.43 in October of 2020.
        </p>
        <p className="learn_page_paragraph">
          That being said, Amazon is an extreme example of this kind of growth.
          Invested in another popular company, Walmart, that $1,000 would be
          worth roughly $2,769 after those ten years.
        </p>
        <p className="learn_page_paragraph">
          Not everyone has $1,000, $10,000, or $100,000 lying around, though.
          Many investors are starting out with very small amounts. This brings
          up an important saying: "time in the market beats timing the market."
          Instead of trying to pick the perfect stock and get it at the perfect
          time, small consistent investments into the market as a whole will
          always lead to better results.
        </p>
        <p className="learn_page_subheader">Growth not guaranteed</p>
        <p className="learn_page_paragraph">
          It's tempting to think that because certain companies have seen
          massive growth and success over a few short years, this means every
          company will see success. Unfortunately, this couldn't be further from
          the truth.
        </p>
        <p className="learn_page_paragraph">
          Some companies, such as Gamestop and Hertz, have been on the downtrend
          for years. $1,000 invested into Gamestop in 2015 would be worth about
          $283 in 2020.
        </p>
        <p className="learn_page_paragraph">
          This brings up a major concept in investing; risk. Risk is the
          likelihood that you will lose money on an investment. You can reduce
          risk in certain ways. One of these ways is to diversify your stocks.
          Diversifying means spreading your money out among many companies,
          instead of just a few. Being highly diversified means that you own at
          least 15 different shares. This means if one of those companies loses
          value or goes bankrupt, your portfolio will take less of a hit.
        </p>

        <Blanks
          id={id}
          specId={userVal.progress[0].progressElements[1].id}
          title={options1.title}
          options={options1.options}
        />
      </div>
    </div>
  );
};

export const OptionsPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="learn_page">
        <h2 className="learn_page_header">The Basics of Options</h2>
        <p className="learn_page_paragraph">
          Most people interested the stock market have heard of buying shares
          and know what it means to invest in a company. However, there is a
          whole world out there within the stock market that most people aren't
          aware of. One of these terms you may be unfamiliar with is that of
          "options," which is a fancy way of saying that owning an option
          contract gives you the <i>option</i> to buy or sell a number of shares
          at a certain time.
        </p>
      </div>
    </div>
  );
};

export const EtfPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="learn_page">
        <h2 className="learn_page_header">ETFs and Index Funds</h2>
        <p className="learn_page_paragraph"></p>
      </div>
    </div>
  );
};

export const ProtectionPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="learn_page">
        <h2 className="learn_page_header">
          How To Protect Yourself In The Market
        </h2>
        <p className="learn_page_paragraph">
          The stock market can be a volatile place, and many traders have lost
          fortunes through not protecting themselves well enough. In this
          tutorial we'll give you some pointers for how to avoid losing
          everything.
        </p>
      </div>
    </div>
  );
};
