import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../AppMain/App";
import { Link } from "react-router-dom";

const UserProfileAccount: React.FC = () => {
  const [membershipState, setMembershipState] = useState(
    "You currently have a free plan"
  );
  const { userVal, setUserVal } = useContext(userContext);

  useEffect(() => {
    if (userVal.membership === true) {
      setMembershipState("You're on a paid plan!");
    } else {
      setMembershipState("You currently have a free plan");
    }
  }, [userVal]);

  function modMembershipState() {
    if (userVal.membership === true) {
      return (
        <div>
          <p>
            Change your plan <Link to="/plan">here</Link>
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p>
            Upgrade your account <Link to="/plan">here</Link>
          </p>
        </div>
      );
    }
  }

  return (
    <div>
      <h2>Your Account</h2>
      <h3>{membershipState}</h3>
      {modMembershipState()}
    </div>
  );
};

export default UserProfileAccount;
