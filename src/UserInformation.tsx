import React from "react";

interface Props {
  user: string;
  netWorth: number;
  timeInMarket: number;
}

const UserInformation: React.FC<Props> = (props) => {
  return (
    <div>
      <p>{props.user}</p>
      <p>${props.netWorth}</p>
      <p>In market since {props.timeInMarket}</p>
      <button>Follow</button>
    </div>
  );
};

export default UserInformation;
