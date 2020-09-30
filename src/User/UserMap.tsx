import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface RecentActivity {
  title: string;
  ticker: string;
  type: string;
  tradeId: number;
  shares: number;
  price: number;
  gain: number;
  timestamp: number;
}

interface Props {
  user: string;
  userId: number;
  netWorth: number;
  timeInMarket: number;
  recentTrades: RecentActivity[];
}

const UserMap: React.FC<Props> = (props) => {
  const [showRecent, setShowRecent] = useState(false);

  function recentActivityFunct() {
    if (showRecent === true) {
      return <div></div>;
    } else return null;
  }

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
      {recentActivityFunct()}
      <div id="recent_trades">
        <p id="recent_trades_span">Recent Trades</p>
        {returnButtonLabel()}
      </div>
    </div>
  );
};

export default UserMap;
