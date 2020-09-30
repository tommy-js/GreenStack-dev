import React, { useState } from "react";
import ReferenceTrade from "../portfolio/ReferenceTrade";

const UserProfileReferences: React.FC = () => {
  const [testData, setTestData] = useState([
    {
      user: "Tom",
      tradeId: 34,
      title: "Apple",
      ticker: "AAPL",
      timestamp: 23435342,
    },
    {
      user: "Jim",
      tradeId: 764,
      title: "Tesla",
      ticker: "TSLA",
      timestamp: 2212111342,
    },
    {
      user: "Tommy",
      tradeId: 324,
      title: "Apple",
      ticker: "AAPL",
      timestamp: 25435353,
    },
  ]);

  function removeTrade(tradeId: number) {
    let array = testData;
    let foundElement = array.find((el) => el.tradeId === tradeId);
    if (foundElement) {
      let elementIndex = array.indexOf(foundElement);
      array.splice(elementIndex, 1);
      setTestData(array);
      // PASS TO MONGO
    }
  }

  return (
    <div>
      {testData.map((el) => (
        <ReferenceTrade
          removeTrade={removeTrade}
          user={el.user}
          tradeId={el.tradeId}
          title={el.title}
          ticker={el.ticker}
          timestamp={el.timestamp}
        />
      ))}
    </div>
  );
};

export default UserProfileReferences;
