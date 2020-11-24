import React from "react";
import { Header } from "../Header/Header";
import { UserFollowerList } from "../UserFollowerList/UserFollowerList";

export const UserProfileFollowed: React.FC = () => {
  return (
    <div>
      <Header text="Your Followers" />
      <UserFollowerList />
    </div>
  );
};
