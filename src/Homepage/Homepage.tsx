import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../AppMain/App";
import Suggested from "../Suggested";
import Profile from "../profile/Profile";
import FollowedActivity from "../profile/FollowedActivity";
import LoadingUser from "../login/LoadingUser";
import NavBar from "../misc/NavBar";
import { userQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql, useLazyQuery } from "react-apollo";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [userId, setUserId] = useState();
  const { userVal, setUserVal } = useContext(userContext);
  const [getUser, { data, loading }] = useLazyQuery(userQuery);

  useEffect(() => {
    const userId = 3257229;
    getUser({
      variables: {
        userId: userId,
      },
    });
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      setUserVal({
        username: data.user.username,
        userId: userId,
        money: data.user.money,
        darkmode: data.user.darkmode,
        invisible: data.user.invisible,
        allowCommentsOnTrades: data.user.allowCommentsOnTrades,
        followers: data.user.followers,
        profileImage: data.user.profileImage,
        trades: data.user.trades,
        watchlist: data.user.watchlist,
        comments: data.user.comments,
        notifications: data.user.notifications,
      });
    }
  }, [data]);

  if (data) {
    return (
      <div>
        <NavBar />
        <div id="homepage">
          <Suggested />
        </div>
      </div>
    );
  } else {
    return <LoadingUser />;
  }
};

export default compose(graphql(userQuery, { name: "userQuery" }))(Homepage);
