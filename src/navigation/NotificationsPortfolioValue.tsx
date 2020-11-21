import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";
import { Link } from "react-router-dom";

interface Redux {
  money: number;
}

const NotificationsPortfolioValue: React.FC<Redux> = (props) => {
  return (
    <Link to="/portfolio">
      <div className="notifications_link">
        <p>{props.money}</p>
      </div>
    </Link>
  );
};

export default connect(mapStateToProps)(NotificationsPortfolioValue);
