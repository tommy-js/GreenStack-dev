import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";

interface Redux {
  money: number;
  setPostingToFeed: () => void;
}

const SidebarPortfolioValueRender: React.FC<Redux> = (props) => {
  return (
    <div className="sidebar_element" id="portfolio_value">
      <p className="sidebar_element_text">${props.money}</p>
      <div id="sidebar_element_hover">
        <p id="sidebar_element_hover_text">Portfolio Value</p>
        <button
          id="sidebar_element_hover_button"
          onClick={() => props.setPostingToFeed()}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export const SidebarPortfolioValue = connect(mapStateToProps)(
  SidebarPortfolioValueRender
);
