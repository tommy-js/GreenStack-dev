import React from "react";
import {
  UserType,
  StockType,
  PostType,
} from "../SuggestionTypes/SuggestionTypes";

interface Props {
  typeId: number;
}

export const Suggestion: React.FC<Props> = (props) => {
  function determineType() {
    if (props.typeId === 0) return <UserType />;
    else if (props.typeId === 1) return <StockType />;
    else if (props.typeId === 2) return <PostType />;
  }

  return <React.Fragment>{determineType()}</React.Fragment>;
};
