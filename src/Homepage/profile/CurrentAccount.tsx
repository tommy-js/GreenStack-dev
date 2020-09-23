import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../../AppMain/App";

const CurrentAccount: React.FC = () => {
  const { userVal } = useContext(userContext);
  const [membership, setMembership] = useState("");

  useEffect(() => {
    if (userVal.membership === false) {
      setMembership("Free");
    } else {
      setMembership("Basic");
    }
  }, []);

  function accountSetting() {
    if (userVal.membership === false) {
      return <button>Upgrade</button>;
    } else if (userVal.membership === true) {
      return <button>Downgrade</button>;
    }
  }

  return (
    <div>
      <h2>Your Account</h2>
      <p>Your account: {membership}</p>
      {accountSetting()}
    </div>
  );
};

export default CurrentAccount;
