import React, { useEffect } from "react";
import { FollowerElement } from "../FollowerElement/FollowerElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowerItem } from "../../types/types";
import { modifyGlobalRoutes } from "./index";

interface Redux {
  followers: FollowerItem[];
}

interface Array {
  userId: string;
}

interface Props extends Redux {
  modRoutes: (arr: Array[]) => void;
}

const FollowersRender: React.FC<Props> = ({ followers, modRoutes }: Props) => {
  // Creates routes within the Homepage component for all the users in our Followers list
  useEffect(() => {
    let modifiedRoutes = modifyGlobalRoutes(followers);
    modRoutes(modifiedRoutes);
  }, []);

  return (
    <div id="feed">
      <h2 className="list_header">Your Followers({followers.length})</h2>
      {followers.map((el: FollowerItem) => (
        <FollowerElement
          key={el.followerId}
          userId={el.followerId}
          username={el.followerName}
        />
      ))}
    </div>
  );
};

export const Followers = connect(mapStateToProps)(FollowersRender);
