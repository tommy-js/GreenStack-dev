import React from "react";

const CompanyOptions: React.FC = () => {
  function saveToWatchlist() {
    // PUSH TO MONGO
  }

  return (
    <div className="default_middle">
      <button onClick={() => saveToWatchlist()}>Save to watchlist</button>
    </div>
  );
};

export default CompanyOptions;
