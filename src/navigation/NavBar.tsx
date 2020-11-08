import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NotificationIcon from "../navigation/NotificationIcon";
import home from "../images/main_icon.png";
import portfolio from "../images/portfolio_icon.png";
import tutorial from "../images/tutorial_icon.png";
import { nonTokenModifyUserQuery } from "../queries/queries";
import { connect } from "react-redux";
import { useLazyQuery } from "react-apollo";
import { mapStateToProps, mapDispatchToProps } from "../actions/actions";

interface Props {
  onInitialPostsSet: (posts: any) => void;
  onInitialFollowerSet: (followers: any) => void;
  onInitialFollowingSet: (following: any) => void;
  onInitialNotificationsSet: (notifications: any) => void;
}

const NavBar: React.FC<Props> = (props) => {
  const [getUser, { data: getUserData }] = useLazyQuery(
    nonTokenModifyUserQuery
  );
  function dropToken() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      sessionStorage.removeItem("Token");
    }
  }

  function queryUser() {
    let sessionToken = sessionStorage.getItem("Token");
    if (sessionToken) {
      console.log("queryUser()");
      getUser({
        variables: {
          token: sessionToken,
        },
      });
    }
  }

  useEffect(() => {
    if (getUserData) {
      console.log("getUserData.noTokenMod");
      console.log(getUserData.noTokenMod);
      props.onInitialPostsSet(getUserData.noTokenMod.posts);
      props.onInitialFollowerSet(getUserData.noTokenMod.followers);
      props.onInitialFollowingSet(getUserData.noTokenMod.following);
      props.onInitialNotificationsSet(getUserData.noTokenMod.notifications);
    }
  }, [getUserData]);

  return (
    <div className="navbar">
      <NavLink exact to="/home" onClick={() => queryUser()}>
        <img src={home} className="navbar_icon" />
      </NavLink>
      <NavLink to="/portfolio">
        <img src={portfolio} className="navbar_icon" />
      </NavLink>
      <NavLink to="/about">
        <img src={tutorial} className="navbar_icon" />
      </NavLink>
      <NavLink onClick={() => dropToken()} to="/login">
        Logout
      </NavLink>
      <NotificationIcon />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
