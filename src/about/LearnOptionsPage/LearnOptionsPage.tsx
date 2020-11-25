import React, { useState, useEffect, useContext } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { CommentSection } from "../CommentSection/CommentSection";
import { MultipleChoice } from "../MultipleChoice/MultipleChoice";
import { Blanks } from "../Blanks/Blanks";
import { SelectAll } from "../SelectAll/SelectAll";
import { LearnGraphs } from "../LearnGraphs/LearnGraphs.jsx";
import { statusContext } from "../../AppMain/App/App";
import { browserHist } from "../../AppMain/history";
import {
  APPLE2month,
  AMZN10Year,
  APPLEOptions,
  SP500HalfDecade,
} from "../graphData.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { useQuery } from "react-apollo";
import { tutorialQuery } from "../../queries/queries";
import { Pie } from "react-chartjs-2";

interface Props {
  progress: any;
  progressElements: any;
}

export const LearnOptionsPageRender: React.FC<Props> = (props) => {
  const { data } = useQuery(tutorialQuery, {
    variables: { id: 2 },
    pollInterval: 500,
  });
  const [comments, setComments] = useState([] as any);
  const { status, setStatus } = useContext(statusContext);
  const [id, setId] = useState(props.progress[1].id);
  const [currentProgress, setCurrentProgress] = useState(
    props.progress[0].percent
  );

  useEffect(() => {
    if (data && data.tutorial) {
      setComments(data.tutorial.comments);
    }
  }, [data]);

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
          specId="Options01"
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
          specId="Option02"
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
          specId="Options03"
          title={optionsSelectAll.title}
          options={optionsSelectAll.options}
          currentProgress={currentProgress}
          increment={5}
        />
        <CommentSection id="2" comments={comments} />
      </div>
    </div>
  );
};

export const LearnOptionsPage = connect(mapStateToProps)(
  LearnOptionsPageRender
);
