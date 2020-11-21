import React from "react";

const StockSearch: React.FC = () => {
  return (
    <div id="stock_search">
      <p id="stock_search_text">Add a Stock to Your Watchlist</p>
      <div id="stock_search_textarea_block">
        <input id="stock_search_input" placeholder="Apple, AMD, Etc..." />
      </div>
    </div>
  );
};

export default StockSearch;
