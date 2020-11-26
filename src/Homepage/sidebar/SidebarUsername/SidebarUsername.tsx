import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";

interface Redux {
  username: string;
  profileImage: string;
}

const SidebarUsernameRender: React.FC<Redux> = (props) => {
  return (
    <Link id="sidebar_username_link_spec sidebar_username" to="/home/profile">
      <div className="feed_profile_image_block">
        <img className="feed_profile_image" src={props.profileImage} />
      </div>
      <div id="sidebar_username_link">{props.username}</div>
    </Link>
  );
};

export const SidebarUsername = connect(mapStateToProps)(SidebarUsernameRender);
