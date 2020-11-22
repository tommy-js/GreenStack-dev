import React, { useEffect, useState } from "react";
import { StocksDropdown } from "../StocksDropdown/StocksDropdown";
import { useQuery } from "react-apollo";
import { getStocksQuery } from "../../queries/queries";
import { returnStockSearch } from "./index";

interface Props {
  parsingSearchResults: (argument: boolean) => void;
}

const StockSearchBox: React.FC<Props> = (props) => {
  const { data } = useQuery(getStocksQuery);
  const [stocks, setStocks] = useState();
  const [results, setResults] = useState([] as any);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setStocks(data.getStocks);
  }, [data]);

  function returnSearch(input: string) {
    setSearch(input);
    if (input.length === 0) {
      setResults([]);
      props.parsingSearchResults(false);
    } else {
      let searchResults = returnStockSearch(input, stocks);
      if (searchResults.length > 4) {
        let splicedResults = searchResults.slice(0, 4);
        setResults(splicedResults);
      } else {
        setResults(searchResults);
      }
      props.parsingSearchResults(true);
    }
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
