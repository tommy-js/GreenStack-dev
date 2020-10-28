import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { mapStateToProps } from "../actions/actions";
import { connect } from "react-redux";

interface Redux {
  stocks: any;
  money: any;
  currentPrices: any;
}

const AssetBreakdown: React.FC<Redux> = (props) => {
  const [stockData, setStockData] = useState();
  const [stockTitles, setStockTitles] = useState();

  const stockColor = props.stocks.map((el: any) => el.color);
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
      var totalBreakdown = [];
      let titles = [];
      var len = 0;
      for (let k = 0; k < props.currentPrices.length; k++) {
        if (props.stocks[k].shares > 0) len += 1;
      }
      console.log(len);
      let liquid = parseFloat(props.money);
      totalBreakdown.push(liquid);
      titles.push("Liquid");
      for (let i = 0; i < len; i++) {
        let num = parseFloat(props.currentPrices[i]);
        totalBreakdown.push(props.stocks[i].shares * num);
        titles.push(props.stocks[i].stockTitle);
      }
      console.log("totalBreakdown");
      console.log(totalBreakdown);
      setStockData(totalBreakdown);
      setStockTitles(titles);
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

  return <div>{renderFunct()}</div>;
};

export default connect(mapStateToProps)(AssetBreakdown);
