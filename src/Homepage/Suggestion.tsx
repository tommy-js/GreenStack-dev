import React from "react";
import { UserType, StockType, PostType } from "./SuggestionTypes";

interface Props {
  typeId: number;
}

const Suggestion: React.FC<Props> = (props) => {
  function determineType() {
    if (props.typeId === 0) {
      return (
        <div>
          <UserType />
        </div>
      );
    } else if (props.typeId === 1) {
      return (
        <div>
          <StockType />
        </div>
      );
    } else if (props.typeId === 2) {
      return (
        <div>
          <PostType />
        </div>
      );
    }
  }

  return <div>{determineType()}</div>;
};

export default Suggestion;
