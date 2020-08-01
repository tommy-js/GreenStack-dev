import React from "react";
import Header from "./Header";
import MapBlock from "./MapBlock";

const Suggested: React.FC = () => {
  return (
    <div>
      <Header text="Suggested For You" />
      <MapBlock />
    </div>
  );
};

export default Suggested;
