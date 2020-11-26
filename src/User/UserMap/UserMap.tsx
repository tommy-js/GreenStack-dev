import React, { useState } from "react";
import { Link } from "react-router-dom";

interface RecentActivity {
  title: string;
  ticker: string;
  type: string;
  shares: number;
  price: number;
  gain: number;
  timestamp: number;
}

interface Props {
  user: string;
  userId: string;
  netWorth: number;
  timeInMarket: number;
  recentTrades: RecentActivity[];
}

export const UserMap: React.FC<Props> = (props) => {
  const [showRecent, setShowRecent] = useState(false);

  function returnButtonLabel() {
    if (showRecent === true) {
      return (
        <button
          id="show_recent_button"
          onClick={() => setShowRecent(!showRecent)}
        >
          close
        </button>
      );
    } else {
      return (
        <button
          id="show_recent_button"
          onClick={() => setShowRecent(!showRecent)}
        >
          open
        </button>
      );
    }
  }

  return (
    <div id="user_map">
      <Link to={`/user/${props.userId}`}>
        <p>{props.user}</p>
      </Link>
      <p>${props.netWorth}</p>
      <p>In market for {props.timeInMarket}</p>
      <div id="recent_trades">
        <p id="recent_trades_span">Recent Trades</p>
        {returnButtonLabel()}
      </div>
    </div>
  );
};
