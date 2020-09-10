import React, { useContext } from "react";
import BillingContainer from "./BillingContainer";
import PerksContainer from "./PerksContainer";
import NavBar from "../misc/NavBar";
import { userContext } from "../AppMain/App";

const UserProfilePlan: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);

  return (
    <div>
      <NavBar />
      <div id="profile_plan">
        <BillingContainer membership={userVal.membership} />
        <PerksContainer membership={userVal.membership} />
      </div>
    </div>
  );
};

export default UserProfilePlan;
