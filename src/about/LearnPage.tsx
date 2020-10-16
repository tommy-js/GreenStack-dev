import React, { useState, useEffect, useContext } from "react";
import NavBar from "../navigation/NavBar";
import {
  MultipleChoice,
  Blanks,
  SelectAll,
} from "./KnowledgeCheck/KnowledgeCheck";
import LearnGraphs from "./LearnGraphs.jsx";
import { statusContext, userContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import {
  APPLE2month,
  AMZN10Year,
  APPLEOptions,
  SP500HalfDecade,
} from "./graphs/graphData.js";
import { Link } from "react-router-dom";

export const GlossaryPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="learn_page">
        <h2 className="glossary_header">Important Terms</h2>
        <div className="glossary_term">
          <span className="emphasize">Share:</span> a tiny portion of a company
          owned by you, the investor.
        </div>
        <div className="glossary_term">
          <span className="emphasize">Option:</span> a contract to buy or sell
          shares at a predetermined price by a specific day.
        </div>
        <div className="glossary_term">
          <span className="emphasize">Call:</span> an option contract betting
          that the stock price will rise.
        </div>
        <div className="glossary_term">
          <span className="emphasize">Put:</span> an option contract betting
          that the stock price will fall.
        </div>
        <div className="glossary_term">
          <span className="emphasize">Premium:</span> the price you pay when you
          purchase a call option.
        </div>
        <div className="glossary_term">
          <span className="emphasize">:</span>
        </div>
      </div>
    </div>
  );
};

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
          called{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">shares</span>
          </Link>
          , which fluctuate in value depending on how a company is doing. It's
          your hope as an investor that the value of these shares increase over
          time, so that you can sell them for a profit somewhere down the line.
        </p>
        <p className="learn_page_paragraph">
          Let's take a look at some historical Apple stock data to see how this
          might work.
        </p>

        <LearnGraphs
          points={APPLE2month.points}
          graphicalEffects={APPLE2month.graphicalEffects}
          contentsDiv="apple_learning_graph"
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
        <LearnGraphs
          points={AMZN10Year.points}
          graphicalEffects={AMZN10Year.graphicalEffects}
          contentsDiv="amazon_10_year"
        />
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
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [id, setId] = useState(userVal.progress[1].id);
  const [currentProgress, setCurrentProgress] = useState(
    userVal.progress[0].percent
  );
  const [specId, setSpecId] = useState(userVal.progress[1].progressElements);

  const options1 = {
    title: "Vocab Test",
    options: [
      {
        text: "An options contract you don't own the assets to",
        correctAnswer: "naked",
        value: 2,
        id: 0,
      },
      {
        text: "An options contract you do own shares for",
        correctAnswer: "covered",
        value: 9,
        id: 1,
      },
    ],
  };

  const optionsSelectAll = {
    title: "The premium will be lost in which event(s)?",
    options: [
      {
        id: 0,
        title: "The stock price falls",
        selected: false,
        correct: false,
      },
      {
        id: 1,
        title: "Your puts expire above the strike price",
        selected: false,
        correct: true,
      },
      {
        id: 2,
        title: "You sell shares in the company",
        selected: false,
        correct: false,
      },
      {
        id: 3,
        title: "Your calls expire below the strike price",
        selected: false,
        correct: true,
      },
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
        <h2 className="learn_page_header">The Basics of Options</h2>
        <p className="learn_page_paragraph">
          Most people interested the stock market have heard of buying shares
          and know what it means to invest in a company. However, there is a
          whole world out there within the stock market that most people aren't
          aware of. One of these terms you may be unfamiliar with is that of
          "options."
        </p>
        <p className="learn_page_paragraph">
          An{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">option</span>
          </Link>{" "}
          is a contract with another trader that gives you the right to buy or
          sell a number of shares at a certain price. In fact, it specifically
          gives you the right to buy or sell 100 shares. There are two types of
          options;{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">call</span>
          </Link>
          , which basically means you think the stock price will rise, and{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">puts</span>
          </Link>
          , which implies that you believe the stock value will fall.
        </p>
        <p className="learn_page_paragraph">
          These terms sound complicated, but we'll explain them in simple terms
          here, starting with the call option.
        </p>
        <p className="learn_page_subheader">The call option</p>
        <p className="learn_page_paragraph">
          Whenever you buy a call option, you're basically placing a bet that
          the stock price will rise. In order to place a call option, you need
          to pick a price you think the stock will rise to and a date you think
          it will hit that level by. For instance, if I were certain that Tesla
          stock would hit $600 by January 10, 2021, I would buy this option
          contract and in return I would pay a fee. The fee is called a{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">premium</span>
          </Link>
          , and it can range from as little as $1 to tens of thousands or more.
          The fee is the cost for you to buy this option.
        </p>
        <p className="learn_page_paragraph">
          Of course, you can also sell calls. This allows you to charge other
          investors a premium, which lets you make money easily. There is,
          however, greater risk in selling options, which we'll get into soon.
        </p>
        <p className="learn_page_paragraph">
          There are two important concepts when it comes to selling calls, which
          are that of{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">naked calls</span>
          </Link>{" "}
          and{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">covered calls</span>
          </Link>
          . The covered call takes place when you own the asset you're selling
          the call option for. This means that if you lose your bet, and the
          person on the other end of your contract excercizes, you're "covered".
          There is limited risk associated with this.
        </p>

        <MultipleChoice
          options={[
            { title: "A more valuable share or asset", id: 0 },
            { title: "The right to purchase shares before others", id: 1 },
            { title: "The fee you pay to buy an options contract", id: 2 },
          ]}
          id={id}
          specId={userVal.progress[1].progressElements[0].id}
          increment={5}
          correctAnswer={3}
          currentProgress={currentProgress}
          headline="What is a premium?"
        />

        <p className="learn_page_paragraph">
          In comparison, the naked call is far riskier; it essentially means you
          do not own the underlying asset, and so your potential loss is
          technically unlimited.
        </p>
        <p className="learn_page_subheader">The put option</p>
        <p className="learn_page_paragraph">
          Puts are the exact opposite of calls. You believe the stock price will
          fall and so you sell or buy a put option in the hopes of making money.
          Selling a put option gives you the premium when someone buys your
          contract. Buying the put option costs you money upfront but then if
          the stock falls or stays below a certain level you can make large sums
          of money.
        </p>
        <p className="learn_page_paragraph">
          The same concepts of{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">naked puts</span>
          </Link>{" "}
          and{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">covered puts</span>
          </Link>{" "}
          applies here.
        </p>
        <p className="learn_page_subheader">Examples</p>
        <p className="learn_page_paragraph">
          The best way to learn is through example, so here we'll really get
          into the nitty-gritty of options trading.
        </p>

        <Blanks
          id={id}
          specId={userVal.progress[1].progressElements[1].id}
          title={options1.title}
          options={options1.options}
        />

        <p className="learn_page_paragraph">
          Let's say you think the price of Apple is going to rise. In fact,
          you're confident that the share value of Apple will go above $130 by
          November 6, 2020, three weeks from today. This represents a gain of
          about $9 per share.
        </p>
        <p className="learn_page_paragraph">
          Because you're so confident, you decide to buy calls on Apple at this{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">strike price</span>
          </Link>{" "}
          and for this date. Because it is widely believed that the price of
          Apple will rise over time, and because the price of its shares are
          relatively high, the cost of buying this option contract is also high.
          In fact, buying one contract on this will cost you $240!
        </p>
        <p>
          Remember that if the date you picked comes and goes and Apple hasn't
          reached that price, your contract will expire worthless and you will
          lose that $240 premium.
        </p>

        <SelectAll
          id={id}
          specId={userVal.progress[1].progressElements[2].id}
          title={optionsSelectAll.title}
          options={optionsSelectAll.options}
          currentProgress={currentProgress}
          increment={5}
        />
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
        <h2 className="learn_page_header">Diversification</h2>
        <p className="learn_page_paragraph">
          The stock market can be a volatile place, and many traders have lost
          fortunes through not protecting themselves well enough. In this
          tutorial we'll give you some pointers for how to continue growing
          amidst uncertain times.
        </p>
        <p className="learn_page_paragraph">
          It can be tempting when looking at stocks such as Amazon, Tesla, or
          Apple to just put everything in these companies. However, the stock
          market can be a risky place. Even though it is very unlikely, there is
          always the possibility that a company like Amazon or Apple begins to
          fail, or are outpaced by the general market.
        </p>
        <p className="learn_page_paragraph">
          There are two main ways investors protect their assets, and both rely
          on the same general idea. The first is through manual{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">diversification</span>
          </Link>
          . This is the process of splitting up your portfolio among many
          stocks, and ideally many different sectors. For example, you might buy
          AMD stock, which is in the tech sector, as well as McDonalds stock,
          which is a member of the service industry.
        </p>
        <p className="learn_page_paragraph">
          The motivation for doing this is simple; over time, the economy as a
          whole tends to grow. Individual companies may die off, but if you're
          looking for consistent, long-term growth, buying into the larger
          economy as a whole is your best bet.
        </p>

        <LearnGraphs
          points={SP500HalfDecade.points}
          graphicalEffects={SP500HalfDecade.graphicalEffects}
          contentsDiv="sp_5_year"
        />

        <p className="learn_page_paragraph">
          The graph above shows the value of the S&P 500 from 2011 to 2020. The
          S&P 500 is an{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">index</span>
          </Link>
          , or a measurement that takes account of a number of stocks. In the
          case of the S&P 500, it is an index that measures the value of the 500
          largest companies listed on US stock exchanges.
        </p>
        <p className="learn_page_paragraph">
          You can get a sense of how the overall economy is doing from these
          kinds of graphs. Just from looking at the one above you can tell that
          the economic state of the US has improved drastically in only a few
          years.
        </p>
      </div>
    </div>
  );
};
