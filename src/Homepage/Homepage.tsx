import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../AppMain/App";
import Suggested from "../Suggested";
import Profile from "../profile/Profile";
import FollowedActivity from "../profile/FollowedActivity";
import LoadingUser from "../login/LoadingUser";
import { userQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql, useLazyQuery } from "react-apollo";

interface Props {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const [userId, setUserId] = useState();
  const { userVal, setUserVal } = useContext(userContext);
  const [getUser, { data, loading }] = useLazyQuery(userQuery);
  const [testData, setTestData] = useState([
    {
      user: "John",
      userId: 2,
      title: "Apple",
      ticker: "AAPL",
      type: "Sell",
      tradeId: 0,
      shares: 22,
      price: 132,
      gain: 12.63,
      timestamp: 3432423,
    },
    {
      user: "John",
      userId: 3,
      comment: "Git gud kiddo.",
      type: "Comment",
      likes: 23,
      dislikes: 0,
      title: "Tesla",
      ticker: "TSLA",
      tradeId: 42,
      shares: 5,
      price: 242,
      gain: 2452.63,
      timestamp: 2995988,
    },
    {
      user: "Tommy",
      userId: 0,
      title: "Tesla",
      ticker: "TSLA",
      type: "Buy",
      tradeId: 2,
      shares: 5,
      price: 242,
      gain: 2452.63,
      timestamp: 256646435,
    },
  ]);

  useEffect(() => {
    if (testData) {
      props.updateConstantActivity(testData);
    }
  }, []);

  useEffect(() => {
    const userId = 2;
    getUser({
      variables: {
        userId: userId,
      },
    });
    setUserId(userId);
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
      });
    }
  }, [data]);

  if (data) {
    return (
      <div id="homepage">
        <Suggested />
        <FollowedActivity testData={testData} />
      </div>
    );
  } else {
    return <LoadingUser />;
  }
};

export default compose(graphql(userQuery, { name: "userQuery" }))(Homepage);
