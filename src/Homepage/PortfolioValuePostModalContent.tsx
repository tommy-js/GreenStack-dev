import React, { useState } from "react";
import PostPortfolioValue from "../resolvers/PostPortfolioValue";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";
import confetti from "../images/confetti.png";

interface Redux {
  money: any;
}

interface Props extends Redux {
  setPostingToFeed: () => void;
}

const PortfolioValuePostModalContent: React.FC<Props> = (props) => {
  const [text, setText] = useState("");

  function successfulEvent() {
    console.log("success");
    setText("");
    props.setPostingToFeed();
  }

  function unsuccessfulEvent() {
    console.log("failed");
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
        unsuccessfulEvent={unsuccessfulEvent}
        successfulEvent={successfulEvent}
      />
    </div>
  );
};

export default connect(mapStateToProps)(PortfolioValuePostModalContent);
