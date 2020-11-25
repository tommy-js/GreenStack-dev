import React from "react";
import { QueryUserResult, QueryStockResult } from "../QueryResult/QueryResult";

interface Props {
  results: any;
}

export const SearchResults: React.FC<Props> = (props) => {
  function returnQuery() {
    if (props.results) {
      if (props.results.dataType === 0) {
        return (
          <QueryUserResult
            username={props.results.username}
            profileImage={props.results.profileImage}
            userId={props.results.userId}
            bio={props.results.bio}
          />
        );
      } else {
        return (
          <QueryStockResult
            title={props.results.title}
            ticker={props.results.ticker}
            description={props.results.description}
            country={props.results.country}
            stockId={props.results.stockId}
          />
        );
      }
    } else return <h2>Nothing Found</h2>;
  }

  return <div id="feed">{returnQuery()}</div>;
};
