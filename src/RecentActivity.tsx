import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  user: string;
  userId: number;
  tradeId: number;
  ticker: string;
  type: string;
  shares: number;
  price: number;
  gain: number;
  timestamp: number;
}

const RecentActivity: React.FC<Props> = (props) => {
  return (
    <Link to={`/trade/${props.tradeId}`}>
      <div id="recent_activity">
        <p>
          Committed a {props.type} of {props.title} on {props.timestamp} at a
          price of ${props.price}
        </p>
        <p id="view_more_information">View more information...</p>
      </div>
    </Link>
  );
};

export default RecentActivity;
