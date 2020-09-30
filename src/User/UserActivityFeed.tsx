import React from "react";

const UserActivityFeed: React.FC = () => {
  const testData = [
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
      timestamp: 2995988,
    },
    {
      user: "John",
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
  ];

  return <div id="user_activity_feed"></div>;
};

export default UserActivityFeed;
