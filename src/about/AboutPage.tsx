import React, { useState, useEffect, useContext } from "react";
import AboutUs from "./AboutUs";
import Learn from "./Learn";
import NavBar from "../navigation/NavBar";
import { LoadingUser } from "../login/LoadingUser";
import UserLoginAuthSubresolver from "../resolvers/UserLoginAuthSubresolver";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { queryToken } from "../queries/queries";
import { useLazyQuery } from "react-apollo";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

const AboutPage: React.FC = () => {
  const [loadingInUser, setLoadingInUser] = useState(false);
  const [userId, setUserId] = useState();
  const { status, setStatus } = useContext(statusContext);
  const [passToken, { data, loading }] = useLazyQuery(queryToken);

  useEffect(() => {
    console.log("homepage status: " + status);
    if (status === false) {
      let sessionToken = sessionStorage.getItem("Token");
      if (sessionToken) {
        passToken({
          variables: {
            token: sessionToken,
          },
        });
      } else {
        browserHist.push("/login");
      }
    }
  }, []);

  useEffect(() => {
    console.log("homepage status: " + status);
    if (status === false) {
      if (data && data.token) {
        console.log(data);
        console.log("session token same as data token");
        setUserId(data.token.userId);
        setLoadingInUser(true);
      }
    }
  }, data);

  function loggedIn() {
    setStatus(true);
    setLoadingInUser(false);
  }

  function renderLoading() {
    if (status === true) {
      return (
        <div>
          <NavBar />
          <AboutUs />
          <Learn />
        </div>
      );
    }
  }

  function returnLoadingInUser() {
    if (loadingInUser === true) {
      return (
        <div className="render_loading">
          <div className="drop_loading_block">
            <LoadingUser />
            <UserLoginAuthSubresolver id={userId} loggedIn={loggedIn} />
          </div>
        </div>
      );
    } else {
      return <div>{renderLoading()}</div>;
    }
  }

  return <div>{returnLoadingInUser()}</div>;
};

export default connect(mapStateToProps)(AboutPage);
