import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { Link } from "react-router-dom";

interface Redux {
  money: number;
}

const NotifPortfolioValue: React.FC<Redux> = (props) => {
  return (
    <Link
      className="no_style notifications_link notifications_link_text"
      to="/portfolio"
    >
      ${props.money}
    </Link>
  );
};

export const NotificationsPortfolioValue = connect(mapStateToProps)(
  NotifPortfolioValue
);
