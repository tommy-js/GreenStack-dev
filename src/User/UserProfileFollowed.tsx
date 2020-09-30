import React from "react";
import Header from "./Header";
import UserFollowerList from "./UserFollowerList";

const UserProfileFollowed: React.FC = () => {
  return (
    <div>
      <Header text="Your Followers" />
      <UserFollowerList />
    </div>
  );
};

export default UserProfileFollowed;
