import React from "react";

interface Props {
  title: string;
  ticker: string;
  type: string;
  date: string;
  price: number;
  profit: number;
  shares: number;
}

const ProfileTrade: React.FC<Props> = (props) => {
  return (
    <div>
      <p>
        {props.type} on {props.date} of {props.title} #{props.ticker}.
      </p>
      <p>
        Executed {props.shares} at a per-share value of {props.price} for a
        profit of {props.profit}.
      </p>
    </div>
  );
};

export default ProfileTrade;
