import React from "react";
import { FreeAccount, PaidAccount } from "./AccountPerks";

interface Props {
  membership: boolean;
}

const PerksContainer: React.FC<Props> = (props) => {
  return (
    <div id="perks_container">
      <FreeAccount />
      <PaidAccount />
    </div>
  );
};

export default PerksContainer;
