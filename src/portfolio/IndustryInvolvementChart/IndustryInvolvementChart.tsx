import React from "react";
import { Radar } from "react-chartjs-2";

export const IndustryInvolvementChart: React.FC = () => {
  const data = {
    labels: ["Running", "Swimming", "Eating", "Cycling"],
    datasets: [
      {
        data: [85, 62, 34, 72],
        borderColor: "green",
      },
    ],
  };

  const options = {
    scale: {
      angleLines: {
        display: false,
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 100,
      },
    },
  };

  return <Radar data={data} options={options} />;
};
