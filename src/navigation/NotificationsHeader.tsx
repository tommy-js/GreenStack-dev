import React from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";
import { Link } from "react-router-dom";

interface Redux {
  username: string;
}

const NotificationsHeader: React.FC<Redux> = (props) => {
  return (
    <Link to="/home/profile">
      <div className="notifications_link">
        <p>{props.username}</p>
      </div>
    </Link>
  );
};

export default connect(mapStateToProps)(NotificationsHeader);
