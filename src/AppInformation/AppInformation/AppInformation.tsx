import React from "react";
import { SignedOutNavBar } from "../SignedOutNavBar/SignedOutNavBar";

export const AppInformation: React.FC = () => {
  return (
    <React.Fragment>
      <SignedOutNavBar />
      <div id="app_information_page">
        <h2>Simulation</h2>
        <h2>Risk Free</h2>
        <p>
          TIKR operates a fully-functional simulated stock market. Use this to
          your advantage in testing theories, learning without risk, and making
          a name for yourself as a smart trader.
        </p>
        <h2>Be Daring</h2>
        <p>
          Try out your riskiest strategies without fear; after all, going
          bankrupt only means you'll need to click "start over" to begin again.
        </p>
        <h2>Beat the Market</h2>
        <p>
          Get yourself onto the leaderboard by making good calls or being
          successful in the long-term.
        </p>

        <h2>Community</h2>
        <h2>Get Noticed</h2>
        <p>
          Make good calls, post interesting analysis, or just engage with the
          community to acquire followers.
        </p>
        <h2>Show Your Support</h2>
        <p>
          Follow other members of the community for their insights on the
          market, unique perspective, and funny memes.
        </p>
        <h2>Make Bets With Others</h2>
        <p>
          Sure that a stock is going to go one way, while in disagreement with
          others? Make a bet with them and reap the benefits of your cleverness.
        </p>

        <h2>Expand Your Understanding</h2>
        <h2>Overall Design</h2>
        <p>
          TIKR is built to help traders in a real way. We suggest companies and
          users to you based on our data and your preferences.
        </p>
        <h2>Educate Yourself</h2>
        <p>
          We have poured a huge amount of time into the creation of a series of
          interactive tutorials, which cover everything from the very basics of
          stock trading all the way up to selling naked calls. Learn what you
          want or start from the beginning and work all the way through; don't
          worry about taking a break, we have saved your progress!
        </p>
        <h2>Do Your Own Analysis</h2>
        <p>
          The tools we have built make it easy for you to do your own analysis
          of each company and their stock. Better yet, we make it trivial to
          share this information with your followers.
        </p>

        <h2>FAQs</h2>
        <p>
          <h2>Question: </h2>Is TIKR free?
        </p>
        <p>
          <h2>Answer: </h2>TIKR and all its features are completely free.
          Subscribe for $2.99 per month to get a small digital badge and have
          your name put on the list of supporters.
        </p>

        <p>
          <h2>Question: </h2>Is TIKR a real trading platform?
        </p>
        <p>
          <h2>Answer: </h2>TIKR is a simulated trading environment. This allows
          for an exploration of the market and market strategies with none of
          the risk.
        </p>
      </div>
    </React.Fragment>
  );
};
