import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { Link } from "react-router-dom";

interface Redux {
  money: number;
}

const NotifPortfolioValue: React.FC<Redux> = (props) => {
  return (
    <div className="notifications_link">
      <Link className="no_style" to="/portfolio">
        <p className="notifications_link_text">${props.money}</p>
      </Link>
    </div>
  );
};

export const NotificationsPortfolioValue = connect(mapStateToProps)(
  NotifPortfolioValue
);
