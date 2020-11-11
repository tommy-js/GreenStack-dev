import React from "react";

interface Hist {
  style: string;
  text: string;
  timestamp: number;
}

const HistoryElement: React.FC<Hist> = (props) => {
  return (
    <div className="notifications_link">
      <p>{props.text}</p>
      <p>{props.timestamp}</p>
    </div>
  );
};

export default HistoryElement;
