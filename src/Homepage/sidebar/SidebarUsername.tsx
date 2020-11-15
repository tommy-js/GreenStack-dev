import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Redux {
  username: string;
  profileImage: string;
}

const SidebarUsername: React.FC<Redux> = (props) => {
  return (
    <Link id="sidebar_username_link_spec" to="/home/profile">
      <div id="sidebar_username">
        <div className="feed_profile_image_block">
          <img className="feed_profile_image" src={props.profileImage} />
        </div>
        <div id="sidebar_username_link">{props.username}</div>
      </div>
    </Link>
  );
};

export default connect(mapStateToProps)(SidebarUsername);
