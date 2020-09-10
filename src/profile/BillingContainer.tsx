import React, { useState, useEffect } from "react";
import ChargeContainer from "./ChargeContainer";
import PlanOptionsContainer from "./PlanOptionsContainer";

interface Props {
  membership: boolean;
}

const BillingContainer: React.FC<Props> = (props) => {
  const [charge, setCharge] = useState(0.0);

  useEffect(() => {
    if (props.membership === true) {
      setCharge(2.99);
    } else {
      setCharge(0.0);
    }
  }, []);

  return (
    <div id="billing_container">
      <ChargeContainer charge={charge} />
      <PlanOptionsContainer membership={props.membership} />
    </div>
  );
};

export default BillingContainer;
