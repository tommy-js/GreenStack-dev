import React from "react";
import { Pie } from "react-chartjs-2";
import { mapStateToProps } from "../../actions/actions";
import { connect } from "react-redux";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  stocks: StockItem[];
}

const AssetChartRender: React.FC<Redux> = (props) => {
  const stockTitles = props.stocks.map((el: StockItem) => el.title);
  const stockData = props.stocks.map((el: StockItem) => el.shares);
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
  return (
    <React.Fragment>
      <Pie
        data={pieData}
        options={{
          title: { display: true, text: "Your Share Breakdown", fontSize: 20 },
          legend: { display: false },
          cutoutPercentage: 25,
        }}
      />
    </React.Fragment>
  );
};

export const AssetChart = connect(mapStateToProps)(AssetChartRender);
