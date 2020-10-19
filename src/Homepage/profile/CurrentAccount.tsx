import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Props {
  membership: any;
}

const CurrentAccount: React.FC<Props> = (props) => {
  const [membership, setMembership] = useState("");

  useEffect(() => {
    if (props.membership === false) {
      setMembership("Free");
    } else {
      setMembership("Basic");
    }
  }, []);

  function accountSetting() {
    if (props.membership === false) {
      return <button>Upgrade</button>;
    } else if (props.membership === true) {
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

export default connect(mapStateToProps)(CurrentAccount);
