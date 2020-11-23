import React from "react";

export const LoginPageFeedInfo: React.FC = () => {
  return (
    <div className="login_page_information">
      <h3 className="login_page_text">
        Recieve live updates, recent news, and see discussion about companies
        and their stocks. Engage with those you follow and those who follow you
        in real-time.
      </h3>
    </div>
  );
};

export const LoginPageCommunityInfo: React.FC = () => {
  return (
    <div className="login_page_information">
      <h3 className="login_page_text">
        Follow and be followed, engage in discussion and make bets with others
        on where the stocks are going to go. Comment on companies and trades.
      </h3>
    </div>
  );
};

export const LoginPageLearnInfo: React.FC = () => {
  return (
    <div className="login_page_information">
      <h3 className="login_page_text">
        Learn from our dozens of in-depth, interactive tutorials. Become an
        expert on everything from the very basics of market investing to the
        risks and benefits of options trading.
      </h3>
    </div>
  );
};
