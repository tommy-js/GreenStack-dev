import React from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";

export const LearnGlossaryPage: React.FC = () => {
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
