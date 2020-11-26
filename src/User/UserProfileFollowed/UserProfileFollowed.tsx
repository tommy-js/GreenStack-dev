import React from "react";
import { Header } from "../Header/Header";
import { UserFollowerList } from "../UserFollowerList/UserFollowerList";

export const UserProfileFollowed: React.FC = () => {
  return (
    <React.Fragment>
      <Header text="Your Followers" />
      <UserFollowerList />
    </React.Fragment>
  );
};
