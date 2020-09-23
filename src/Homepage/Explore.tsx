import React from "react";
import ExploreCompany from "./ExploreCompany";
import { ExploreStock, ExploreUser } from "./ExploreElement";

const Explore: React.FC = () => {
  const testData = [
    {
      dataId: 0,
      data: {
        id: 0,
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
        id: 3523,
        username: "Ty",
        description: "Stock analyst for the NYT.",
      },
    },
  ];

  const techData = [
    {
      stockId: 0,
      title: "Apple",
      ticker: "AAPL",
      description:
        "Largest company in the world. Specializes in computer and phone technology.",
      country: "United States of America",
      price: 432,
      marketcap: "$2.1T",
    },
    {
      stockId: 1,
      title: "Microsoft",
      ticker: "MSFT",
      description:
        "Creates computer chips, video games, and business infrastructure.",
      country: "United States of America",
      price: 203,
      marketcap: "$1.6T",
    },
    {
      stockId: 2,
      title: "Alphabet",
      ticker: "GOOGL",
      description: "Search engines, software, and research company",
      country: "United States of America",
      price: 2000,
      marketcap: "$971B",
    },
    {
      stockId: 3,
      title: "Samsung",
      ticker: "Samsung Electronics Co Ltd",
      description: "Phones, TVs, and other electronics.",
      country: "South Korea",
      price: 50,
      marketcap: "$335B",
    },
  ];

  const manufacturingData = [
    {
      stockId: 4,
      title: "Daimler",
      ticker: "DMLRY",
      description:
        "Commonly known as Mercedes-Benz, this car manufacturer is one of the biggest in the world",
      country: "Germany",
      price: 13,
      marketcap: "$56B",
    },
  ];

  const energyData = [
    {
      stockId: 5,
      title: "ExxonMobil",
      ticker: "XOM",
      description: "Oil and gas producer headquartered in the United States.",
      country: "United States of America",
      price: 35,
      marketcap: "$148B",
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
      <h3 className="explore_header">You May Be Interested In...</h3>
      {testData.map((el: any) => (
        <div key={el.id}>{returnExploreEl(el.dataId, el.data)}</div>
      ))}
      <h3 className="explore_header">Explore Companies</h3>
      <h2 className="explore_company_header">Technology</h2>
      {techData.map((el: any) => (
        <div key={el.stockId}>
          <ExploreCompany
            keyId={el.stockId}
            stockId={el.stockId}
            title={el.title}
            ticker={el.ticker}
            description={el.description}
            price={el.price}
            marketcap={el.marketcap}
          />
        </div>
      ))}
      <h2 className="explore_company_header">Manufacturing</h2>
      {manufacturingData.map((el: any) => (
        <div key={el.stockId}>
          <ExploreCompany
            keyId={el.stockId}
            stockId={el.stockId}
            title={el.title}
            ticker={el.ticker}
            description={el.description}
            price={el.price}
            marketcap={el.marketcap}
          />
        </div>
      ))}
      <h2 className="explore_company_header">Energy</h2>
      {energyData.map((el: any) => (
        <div key={el.stockId}>
          <ExploreCompany
            keyId={el.stockId}
            stockId={el.stockId}
            title={el.title}
            ticker={el.ticker}
            description={el.description}
            price={el.price}
            marketcap={el.marketcap}
          />
        </div>
      ))}
    </div>
  );
};

export default Explore;
