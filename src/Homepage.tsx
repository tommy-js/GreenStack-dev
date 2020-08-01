import React, { useState, useEffect } from "react";
import Suggested from "./Suggested";
import Profile from "./Profile";
import FollowedActivity from "./FollowedActivity";

interface Props {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const [testData, setTestData] = useState([
    {
      user: "John",
      userId: 0,
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
      userId: 0,
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

  return (
    <div id="homepage">
      <Suggested />
      <FollowedActivity testData={testData} />
    </div>
  );
};

export default Homepage;
