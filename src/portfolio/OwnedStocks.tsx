import React from "react";
import ShareListing from "./ShareListing";

interface Props {
  owned: any;
}

const OwnedStocks: React.FC<Props> = (props) => {
  function returnRender() {
    if (props.owned.length != 0) {
      return (
        <div id="owned_stocked">
          {props.owned.map((el: any) => (
            <div>
              <ShareListing
                stockId={el.stockId}
                title={el.title}
                ticker={el.ticker}
                shares={el.shares}
                price={el.price}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }

  return <div>{returnRender()}</div>;
};

export default OwnedStocks;
