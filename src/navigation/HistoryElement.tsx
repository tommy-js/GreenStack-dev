import React from "react";

interface Hist {
  title: string;
  ticker: string;
  timestamp: number;
}

const HistoryElement: React.FC<Hist> = (props) => {
  return (
    <div className="notifications_link">
      <p>
        {props.title} #{props.ticker}
      </p>
      <p>{props.timestamp}</p>
    </div>
  );
};

export default HistoryElement;
