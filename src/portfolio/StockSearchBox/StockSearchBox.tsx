import React, { useEffect, useState } from "react";
import { StocksDropdown } from "../StocksDropdown/StocksDropdown";
import { useQuery } from "react-apollo";
import { getStocksQuery } from "../../queries/queries";
import { returnStockSearch } from "./index";

const StockSearchBox: React.FC = () => {
  const { data, loading } = useQuery(getStocksQuery);
  const [stocks, setStocks] = useState();
  const [results, setResults] = useState([] as any);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setStocks(data.getStocks);
  }, [data]);

  function returnSearch(input: string) {
    setSearch(input);
    let searchResults = returnStockSearch(input, stocks);
    setResults(searchResults);
  }

  return (
    <div id="initial_portfolio_input_block">
      <input
        id="initial_portfolio_input"
        value={search}
        onChange={(e) => returnSearch(e.target.value)}
        placeholder="Apple, AMD, Etc..."
      />
      <StocksDropdown stocks={results} />
    </div>
  );
};

export default StockSearchBox;
