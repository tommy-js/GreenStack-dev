import React, { useContext } from "react";
import { userContext } from "../AppMain/App";

const LiquidCapital: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);
  return (
    <div>
      <div id="portfolio_graph"></div>
      <p>Liquid: ${userVal.money}</p>
    </div>
  );
};

export default LiquidCapital;
