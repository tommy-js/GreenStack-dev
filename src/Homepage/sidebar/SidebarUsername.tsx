import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Props {
  username: string;
}

const SidebarUsername: React.FC<Props> = (props) => {
  return (
    <Link id="sidebar_username_link_spec" to="/home/profile">
      <div id="sidebar_username_link">{props.username}</div>
    </Link>
  );
};

export default connect(mapStateToProps)(SidebarUsername);
