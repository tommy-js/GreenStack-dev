import React from "react";
import { Route } from "react-router-dom";
import UserProfileSettings from "../UserProfileSettings";
import UserProfileFollowed from "../UserProfileFollowed";
import UserProfileFollowing from "../UserProfileFollowing";
import UserProfileComments from "../UserProfileComments";
import UserProfileTrades from "../UserProfileTrades";
import UserProfileReferences from "../UserProfileReferences";

const ProfileContent: React.FC = () => {
  return (
    <div id="profile_content">
      <Route path="/profile/followed">
        <UserProfileFollowed />
      </Route>
      <Route path="/profile/following">
        <UserProfileFollowing />
      </Route>
      <Route path="/profile/comments">
        <UserProfileComments />
      </Route>
      <Route path="/profile/trades">
        <UserProfileTrades />
      </Route>
      <Route path="/profile/settings">
        <UserProfileSettings />
      </Route>
      <Route path="/profile/references">
        <UserProfileReferences />
      </Route>
    </div>
  );
};

export default ProfileContent;
