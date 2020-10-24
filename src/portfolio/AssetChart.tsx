import React from "react";
import { Pie } from "react-chartjs-2";
import { mapStateToProps } from "../actions/actions";
import { connect } from "react-redux";

interface Redux {
  stocks: any;
}

const AssetChart: React.FC<Redux> = (props) => {
  const pieData = {
    labels: [props.stocks[0].stockTitle],
    datasets: [
      {
        label: "# of Votes",
        data: [props.stocks[0].shares],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
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
        }}
      />
    </div>
  );
};

export default connect(mapStateToProps)(AssetChart);
