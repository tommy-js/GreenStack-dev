import React, { useState } from "react";
import ProfileTrade from "./ProfileTrade";

const UserProfileTrades: React.FC = () => {
  const [testData, setTestData] = useState([
    {
      title: "Apple",
      ticker: "AAPL",
      type: "Sell",
      date: "2/22/19",
      price: 223.54,
      profit: 4242,
      shares: 13,
    },
    {
      title: "Tesla",
      ticker: "TSLA",
      type: "Sell",
      date: "4/6/19",
      price: 653.54,
      profit: 9334,
      shares: 22,
    },
  ]);

  return (
    <div>
      {testData.map((el) => (
        <ProfileTrade
          title={el.title}
          ticker={el.ticker}
          type={el.type}
          date={el.date}
          price={el.price}
          profit={el.profit}
          shares={el.shares}
        />
      ))}
    </div>
  );
};

export default UserProfileTrades;
