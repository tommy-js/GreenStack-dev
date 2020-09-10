import React from "react";

interface Props {
  charge: number;
}

const ChargeContainer: React.FC<Props> = (props) => {
  return (
    <div id="charge_container">
      <h2>This month's bill:</h2>
      <h1>${props.charge}</h1>
    </div>
  );
};

export default ChargeContainer;
