import React from "react";
import { ExploreStock, ExploreUser } from "./ExploreElement";

const Explore: React.FC = () => {
  const testData = [
    {
      dataId: 0,
      title: "Apple",
      ticker: "AAPL",
      sector: "Technology",
      price: 114.35,
      marketcap: 2000000000000,
    },
    { dataId: 1, username: "Ty", description: "Stock analyst for the NYT." },
  ];

  function returnExploreEl(id: number) {
    if (id === 0) {
      return (
        <div>
          <ExploreStock />
        </div>
      );
    } else if (id === 1) {
      return (
        <div>
          <ExploreUser />
        </div>
      );
    }
  }

  return (
    <div className="explore_container">
      {testData.map((el: any) => (
        <div>{returnExploreEl(el.dataId)}</div>
      ))}
    </div>
  );
};

export default Explore;
