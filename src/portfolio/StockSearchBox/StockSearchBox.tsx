import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import { getStocksQuery } from "../../queries/queries";
import { returnStockSearch } from "./index";

interface Props {
  modResults: (res: any) => void;
  parsingSearchResults?: (argument: boolean) => void;
}

export const StockSearchBox: React.FC<Props> = (props) => {
  const { data } = useQuery(getStocksQuery);
  const [stocks, setStocks] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setStocks(data.getStocks);
  }, [data]);

  function returnSearch(input: string) {
    setSearch(input);
    if (input.length === 0) {
      props.modResults([]);
      if (props.parsingSearchResults) props.parsingSearchResults(false);
    } else {
      let searchResults = returnStockSearch(input, stocks);
      if (searchResults.length > 4) {
        let splicedResults = searchResults.slice(0, 4);
        props.modResults(splicedResults);
      } else props.modResults(searchResults);

      if (props.parsingSearchResults) props.parsingSearchResults(true);
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
    </div>
  );
};
