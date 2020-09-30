import React from "react";
import QueryResult from "./QueryResult";

interface Props {
  results: {
    username: string;
    userId: string;
  };
}

const SearchResults: React.FC<Props> = (props) => {
  function returnQuery() {
    if (props.results) {
      return (
        <div>
          <QueryResult
            username={props.results.username}
            userId={props.results.userId}
          />
        </div>
      );
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
