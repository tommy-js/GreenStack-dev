import React, { useState, useEffect } from "react";

interface Props {
  title: string;
  ticker: string;
  gain: number;
}

const TickerHeader: React.FC<Props> = (props) => {
  const [headerColor, setHeaderColor] = useState();

  useEffect(() => {
    if (props.gain > 0) setHeaderColor("green");
    else setHeaderColor("red");
  }, []);

  function checkIfColor() {
    if (headerColor) {
      return (
        <div>
          <span
            style={{ color: headerColor }}
            className="ticker_header_text"
            id="ticker_header_title"
          >
            {props.title}
          </span>
          <span
            style={{ color: headerColor }}
            className="ticker_header_text"
            id="ticker_header_ticker"
          >
            #{props.ticker}
          </span>
        </div>
      );
    } else return null;
  }

  return <div>{checkIfColor()}</div>;
};

export default TickerHeader;
