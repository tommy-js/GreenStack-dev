import React, { useState, useEffect } from "react";

const UserFeed: React.FC = () => {
  const [loading, setLoading] = useState(true);

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
          <h3>Your Feed</h3>
        </div>
      );
    }
  }

  return <div>{checkLoadState()}</div>;
};

export default UserFeed;
