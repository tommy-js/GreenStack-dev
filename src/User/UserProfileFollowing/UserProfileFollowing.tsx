import React, { useState } from "react";
import { UserFollowingInfo } from "../UserFollowingInfo/UserFollowingInfo";
import { returnUnfollowArray } from "./index";

export const UserProfileFollowing: React.FC = () => {
  const [testData, setTestData] = useState([
    { user: "James", userId: "4", mute: false, following: true },
    { user: "Timmy", userId: "8", mute: false, following: true },
    { user: "Aaron", userId: "23", mute: false, following: true },
  ]);

  function unfollowFunct(userId: string) {
    let returnedArray = returnUnfollowArray(testData, userId);
    setTestData(returnedArray);
  }

  return (
    <React.Fragment>
      {testData.map((el) => (
        <UserFollowingInfo
          key={el.userId}
          user={el.user}
          userId={el.userId}
          mute={el.mute}
          following={el.following}
          unfollowFunct={unfollowFunct}
        />
      ))}
    </React.Fragment>
  );
};
