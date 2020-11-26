import React from "react";

interface Props {
  user: string;
  netWorth: number;
  timeInMarket: number;
}

export const UserInformation: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <p>{props.user}</p>
      <p>${props.netWorth}</p>
      <p>In market since {props.timeInMarket}</p>
      <button>Follow</button>
    </React.Fragment>
  );
};
