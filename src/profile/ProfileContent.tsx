import React from "react";
import { Route } from "react-router-dom";
import UserProfileSettings from "../UserProfileSettings";
import UserProfileFollowed from "../UserProfileFollowed";
import UserProfileFollowing from "../UserProfileFollowing";
import UserProfileComments from "../UserProfileComments";
import UserProfileTrades from "../UserProfileTrades";
import UserProfileReferences from "../UserProfileReferences";

interface Props {
  passInTradeId: (id: number) => void;
}

const ProfileContent: React.FC<Props> = (props) => {
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
      <Route exact path="/profile/trades">
        <UserProfileTrades passInTradeId={props.passInTradeId} />
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
