import React, { useState } from "react";

interface Props {
  following: boolean;
  userId: string;
  setUnfollowed: (userId: string) => void;
}

export const UserFollowButton: React.FC<Props> = (props) => {
  const [following, setFollowing] = useState(props.following);

  function returnFollowing() {
    props.setUnfollowed(props.userId);
    setFollowing(!following);
  }

  return <button onClick={() => returnFollowing()}>unfollow</button>;
};
