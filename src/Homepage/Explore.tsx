import React from "react";
import { ExploreStock, ExploreUser } from "./ExploreElement";

const Explore: React.FC = () => {
  const testData = [
    {
      dataId: 0,
      data: {
        title: "Apple",
        ticker: "AAPL",
        sector: "Technology",
        price: 114.35,
        marketcap: 2000000000000,
      },
    },
    {
      dataId: 1,
      data: {
        username: "Ty",
        description: "Stock analyst for the NYT.",
      },
    },
  ];

  function returnExploreEl(id: number, data: any) {
    if (id === 0) {
      return (
        <div>
          <ExploreStock
            title={data.title}
            ticker={data.ticker}
            sector={data.sector}
            price={data.price}
            marketcap={data.marketcap}
          />
        </div>
      );
    } else if (id === 1) {
      return (
        <div>
          <ExploreUser
            username={data.username}
            description={data.description}
          />
        </div>
      );
    }
  }

  return (
    <div className="explore_container">
      <h3 id="explore_header">You May Be Interested In...</h3>
      {testData.map((el: any) => (
        <div>{returnExploreEl(el.dataId, el.data)}</div>
      ))}
    </div>
  );
};

export default Explore;
