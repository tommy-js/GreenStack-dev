import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../AppMain/App";
import NavBar from "../misc/NavBar";
import ProfileTabs from "./ProfileTabs";
import UserTrade from "../UserTrade";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { Route } from "react-router-dom";

const Profile: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);
  const [tradeId, setTradeId] = useState(0);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  function passInTradeId(id: number) {
    setTradeId(id);
  }

  return (
    <div>
      <NavBar />
      <div id="profile">
        <ProfileTabs
          username={userVal.username}
          profileImage={userVal.profileImage}
          passInTradeId={passInTradeId}
        />
        <Route path={`/trade/${tradeId}`}>
          <UserTrade tradeId={tradeId} />
        </Route>
      </div>
    </div>
  );
};

export default Profile;
