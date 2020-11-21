import React from "react";
import add from "../images/add.png";

const AddStockToWatchList: React.FC = () => {
  return (
    <div>
      <div className="add_stock_watch_list_button">
        <img src={add} />
      </div>
    </div>
  );
};

export default AddStockToWatchList;
