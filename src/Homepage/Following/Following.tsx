import React, { useEffect } from "react";
import { FollowingElement } from "../FollowingElement/FollowingElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowingItem } from "../../types/types";
import { modifyGlobalRoutes } from "./index";

interface Redux {
  following: FollowingItem[];
  userId: string;
}

interface Array {
  userId: string;
}

interface Props extends Redux {
  modRoutes: (arr: Array[]) => void;
}

const FollowingRender: React.FC<Props> = ({ following, modRoutes }: Props) => {
  // Creates routes within the Homepage component for all the users in our Following list
  useEffect(() => {
    let modifiedRoutes = modifyGlobalRoutes(following);
    modRoutes(modifiedRoutes);
  }, []);

  return (
    <div id="feed">
      <h2 className="list_header">Following({following.length})</h2>
      {following.map((el: FollowingItem) => (
        <FollowingElement
          userId={el.userId}
          username={el.username}
          bio={el.bio}
        />
      ))}
    </div>
  );
};

export const Following = connect(mapStateToProps)(FollowingRender);
