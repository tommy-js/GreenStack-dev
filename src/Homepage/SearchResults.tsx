import React from "react";
import { QueryUserResult, QueryStockResult } from "./QueryResult";

interface Props {
  results: any;
}

const SearchResults: React.FC<Props> = (props) => {
  function returnQuery() {
    if (props.results) {
      if (props.results.dataType === 0) {
        return (
          <div>
            <QueryUserResult
              username={props.results.username}
              profileImage={props.results.profileImage}
              userId={props.results.userId}
              bio={props.results.bio}
            />
          </div>
        );
      } else {
        return (
          <div>
            <QueryStockResult
              title={props.results.title}
              ticker={props.results.ticker}
              description={props.results.description}
              country={props.results.country}
              stockId={props.results.stockId}
            />
          </div>
        );
      }
    } else {
      return (
        <div>
          <h2>Nothing Found</h2>
        </div>
      );
    }
  }

  return <div className="feed">{returnQuery()}</div>;
};

export default SearchResults;
