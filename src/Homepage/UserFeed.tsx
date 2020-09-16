import React, { useState, useEffect } from "react";
import Feed from "./Feed";

const UserFeed: React.FC = () => {
  const [loading, setLoading] = useState(false);

  function checkLoadState() {
    if (loading === true) {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    } else if (loading === false) {
      return (
        <div>
          <Feed />
        </div>
      );
    }
  }

  return <div>{checkLoadState()}</div>;
};

export default UserFeed;
