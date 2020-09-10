import React from "react";
import { Link } from "react-router-dom";

interface Props {
  membership: boolean;
}

const PlanOptionsContainer: React.FC<Props> = (props) => {
  function checkMembership() {
    if (props.membership === true) {
      return (
        <div>
          <ul>
            <li>
              <Link to="/cancel">Cancel Membership</Link>
            </li>
            <li>
              <Link to="/delete">Delete Account</Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            <li>
              <Link to="/upgrade">Upgrade Account</Link>
            </li>
            <li>
              <Link to="/delete">Delete Account</Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  return <div id="plan_options_container">{checkMembership()}</div>;
};

export default PlanOptionsContainer;
