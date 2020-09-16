import React from "react";
import SuggestionHeader from "./SuggestionHeader";
import Suggestion from "./Suggestion";

const Suggested: React.FC = () => {
  return (
    <div id="suggestion_div">
      <SuggestionHeader />
      <Suggestion typeId={0} />
    </div>
  );
};

export default Suggested;
