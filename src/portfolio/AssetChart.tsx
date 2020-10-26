import React from "react";
import { Pie } from "react-chartjs-2";
import { mapStateToProps } from "../actions/actions";
import { connect } from "react-redux";

interface Redux {
  stocks: any;
}

const AssetChart: React.FC<Redux> = (props) => {
  const stockTitles = props.stocks.map((el: any) => el.stockTitle);
  const stockData = props.stocks.map((el: any) => el.shares);
  const stockColor = props.stocks.map((el: any) => el.color);
  const pieData = {
    labels: stockTitles,
    datasets: [
      {
        label: "# of Votes",
        data: stockData,
        backgroundColor: stockColor,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Pie
        data={pieData}
        options={{
          title: { display: true, text: "Your Assets", fontSize: 20 },
          legend: { display: false },
          cutoutPercentage: 25,
        }}
      />
    </div>
  );
};

export default connect(mapStateToProps)(AssetChart);
