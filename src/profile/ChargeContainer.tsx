import React from "react";

interface Props {
  charge: number;
}

const ChargeContainer: React.FC<Props> = (props) => {
  return (
    <div id="charge_container">
      <p>Your monthly charge is ${props.charge}</p>
    </div>
  );
};

export default ChargeContainer;
