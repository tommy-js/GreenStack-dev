import React from "react";
import { SuggestionHeader } from "../SuggestionHeader/SuggestionHeader";
import { Suggestion } from "../Suggestion/Suggestion";

export const Suggested: React.FC = () => {
  return (
    <div id="suggestion_div">
      <SuggestionHeader />
      <Suggestion typeId={0} />
    </div>
  );
};
