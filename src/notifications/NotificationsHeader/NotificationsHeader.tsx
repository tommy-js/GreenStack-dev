import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { Link } from "react-router-dom";

interface Redux {
  username: string;
}

const NotificationsHead: React.FC<Redux> = (props) => {
  return (
    <div className="notifications_link">
      <Link className="no_style" to="/home/profile">
        <p className="notifications_link_text">{props.username}</p>
      </Link>
    </div>
  );
};

export const NotificationsHeader = connect(mapStateToProps)(NotificationsHead);
