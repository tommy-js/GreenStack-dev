import React from "react";
import ShareListing from "./ShareListing";

interface Props {
  testData: any;
}

const OwnedStocks: React.FC<Props> = (props) => {
  return (
    <div id="owned_stocked">
      {props.testData.map((el: any) => (
        <div>
          <ShareListing
            title={el.title}
            ticker={el.ticker}
            purchasePrice={el.purchasePrice}
            currentPrice={el.currentPrice}
            shares={el.shares}
          />
        </div>
      ))}
    </div>
  );
};

export default OwnedStocks;
