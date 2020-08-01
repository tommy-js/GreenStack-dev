import React from "react";
import Header from "./Header";
import UserInformation from "./UserInformation";
import UserActivityFeed from "./UserActivityFeed";

interface Props {
  user: string;
  userId: number;
  netWorth: number;
  timeInMarket: number;
}

const User: React.FC<Props> = (props) => {
  return (
    <div id="user">
      <Header text={props.user} />
      <UserInformation
        user={props.user}
        netWorth={props.netWorth}
        timeInMarket={props.timeInMarket}
      />
      <UserActivityFeed />
    </div>
  );
};

export default User;
