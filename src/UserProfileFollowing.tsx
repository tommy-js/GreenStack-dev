import React, { useState } from "react";
import UserFollowingInfo from "./UserFollowingInfo";

const UserProfileFollowing: React.FC = () => {
  const [testData, setTestData] = useState([
    { user: "James", userId: 4, mute: false, following: true },
    { user: "Timmy", userId: 8, mute: false, following: true },
    { user: "Aaron", userId: 23, mute: false, following: true },
  ]);

  function unfollowFunct(userId: number) {
    let testArray = testData;
    let foundElement = testArray.find((el) => el.userId === userId);
    if (foundElement) {
      let elementIndex = testArray.indexOf(foundElement);
      testArray.splice(elementIndex, 1);
      setTestData(testArray);
    }
  }

  return (
    <div>
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
    </div>
  );
};

export default UserProfileFollowing;
