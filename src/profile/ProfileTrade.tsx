import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  ticker: string;
  tradeId: number;
  type: string;
  date: string;
  price: number;
  profit: number;
  shares: number;
  passInTradeId: (id: number) => void;
}

const ProfileTrade: React.FC<Props> = (props) => {
  return (
    <div>
      <Link
        to={`/history/${props.tradeId}`}
        onClick={() => props.passInTradeId(props.tradeId)}
      >
        <p>
          {props.type} on {props.date} of {props.title} #{props.ticker}.
        </p>
        <p>
          Executed {props.shares} at a per-share value of {props.price} for a
          profit of {props.profit}.
        </p>
      </Link>
    </div>
  );
};

export default ProfileTrade;
