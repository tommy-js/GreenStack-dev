import React, { useState, useEffect } from "react";

interface Props {
  following: boolean;
  userId: number;
  setUnfollowed: (userId: number) => void;
}

const UserFollowButton: React.FC<Props> = (props) => {
  const [following, setFollowing] = useState(props.following);
  function returnFollowing() {
    props.setUnfollowed(props.userId);
    setFollowing(!following);
  }

  return <button onClick={() => returnFollowing()}>unfollow</button>;
};

export default UserFollowButton;
