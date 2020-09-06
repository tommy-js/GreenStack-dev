import React, { useState } from "react";
import ProfileTrade from "./profile/ProfileTrade";

interface Props {
  passInTradeId: (id: number) => void;
}

const UserProfileTrades: React.FC<Props> = (props) => {
  const [testData, setTestData] = useState([
    {
      title: "Apple",
      ticker: "AAPL",
      tradeId: 3534,
      type: "Sell",
      date: "2/22/19",
      price: 223.54,
      profit: 4242,
      shares: 13,
    },
    {
      title: "Tesla",
      ticker: "TSLA",
      tradeId: 239334,
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
          tradeId={el.tradeId}
          type={el.type}
          date={el.date}
          price={el.price}
          profit={el.profit}
          shares={el.shares}
          passInTradeId={props.passInTradeId}
        />
      ))}
    </div>
  );
};

export default UserProfileTrades;
