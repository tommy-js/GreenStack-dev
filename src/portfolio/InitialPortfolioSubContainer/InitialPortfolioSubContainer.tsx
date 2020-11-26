import React, { useEffect, useState } from "react";
import { returnStyles } from "./index";

interface Props {
  showSubContainer: boolean;
}

export const InitialPortfolioSubContainer: React.FC<Props> = (props) => {
  const [styles, setStyles] = useState({ display: "block" });

  useEffect(() => {
    let updatedStyles = returnStyles(props.showSubContainer);
    setStyles(updatedStyles);
  }, [props.showSubContainer]);

  return (
    <div style={styles} id="initial_portfolio_sub_container">
      <p id="initial_portfolio_sub_container_text">
        Add a stock to your watchlist to get started
      </p>
    </div>
  );
};
