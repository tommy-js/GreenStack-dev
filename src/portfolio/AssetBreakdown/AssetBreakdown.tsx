import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { mapStateToProps } from "../../actions/actions";
import { connect } from "react-redux";
import { returnBreakdown } from "./index";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  stocks: StockItem[];
  money: number;
  currentPrices: any;
}

const AssetBreakdownRender: React.FC<Redux> = (props) => {
  const [stockData, setStockData] = useState();
  const [stockTitles, setStockTitles] = useState();

  const stockColor = props.stocks.map((el: StockItem) => el.color);
  const pieData = {
    labels: stockTitles,
    datasets: [
      {
        label: "",
        data: stockData,
        backgroundColor: stockColor,
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    if (props.currentPrices) {
      let breakdown = returnBreakdown(
        props.stocks,
        props.currentPrices,
        props.money
      );
      setStockData(breakdown.totalBreakdown);
      setStockTitles(breakdown.titles);
    }
  }, [props.currentPrices]);

  function renderFunct() {
    if (stockData) {
      return (
        <Pie
          data={pieData}
          options={{
            title: {
              display: true,
              text: "Your Asset Breakdown",
              fontSize: 20,
            },
            legend: { display: false },
            cutoutPercentage: 25,
          }}
        />
      );
    } else {
      return null;
    }
  }

  return <React.Fragment>{renderFunct()}</React.Fragment>;
};

export const AssetBreakdown = connect(mapStateToProps)(AssetBreakdownRender);
