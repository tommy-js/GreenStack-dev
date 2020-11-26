import React, { useState } from "react";
import { PostPortfolioValue } from "../PostPortfolioValue/PostPortfolioValue";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import confetti from "../../images/confetti.png";

interface Redux {
  money: number;
}

interface Props extends Redux {
  setPostingToFeed: () => void;
}

const PortfolioValuePostModalContentRender: React.FC<Props> = (props) => {
  const [text, setText] = useState("");

  function successfulEvent() {
    setText("");
    props.setPostingToFeed();
  }

  return (
    <div id="portfolio_value_post_modal_content">
      <p id="portfolio_value_post_modal_content_text">
        <div className="portfolio_value_post_modal_content_emoji_block">
          <img
            className="portfolio_value_post_modal_content_emoji"
            src={confetti}
          />
        </div>
        Announce your portfolio value of ${props.money}
        <div className="portfolio_value_post_modal_content_emoji_block">
          <img
            className="portfolio_value_post_modal_content_emoji"
            src={confetti}
          />
        </div>
      </p>
      <div id="portfolio_value_post_modal_content_textarea_block">
        <textarea
          id="portfolio_value_post_modal_content_textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <PostPortfolioValue
        money={props.money}
        text={text}
        accompaniedURL=""
        buttonTitle="Submit"
        allowComments={true}
        allowLikes={true}
        image=""
        successfulEvent={successfulEvent}
      />
    </div>
  );
};

export const PortfolioValuePostModalContent = connect(mapStateToProps)(
  PortfolioValuePostModalContentRender
);
