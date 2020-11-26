import React, { useState, useEffect } from "react";
import { FollowUser } from "../FollowUser/FollowUser";
import { UserProfilePosts } from "../UserProfilePosts/UserProfilePosts";
import { LoadingGeneral } from "../../login/Loading/Loading";
import { otherUserQuery } from "../../queries/queries.js";
import { useQuery } from "react-apollo";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { FollowingItem, UserRoute } from "../../types/types";
import { returnFoundUser } from "./index";

interface Redux {
  userId: string;
  username: string;
  following: FollowingItem[];
}

interface Props extends Redux {
  inspectUsername: string;
  inspectProfileImage: string;
  inspectUserId: string;
  inspectBio: string;
  modRoutes?: (route: UserRoute) => void;
}

const UserProf: React.FC<Props> = (props) => {
  const [userProfileState, setUserProfileState] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [userProfile, setUserProfile] = useState({} as any);

  const { data } = useQuery(otherUserQuery, {
    variables: { userId: props.inspectUserId },
  });

  useEffect(() => {
    let foundUser = returnFoundUser(props.inspectUserId, props.following);
    setAlreadyAdded(foundUser);
  }, []);

  useEffect(() => {
    if (data) {
      setUserProfile(data.altUser);
      setUserProfileState(true);
      if (props.modRoutes) props.modRoutes(data.altUser.posts);
    }
  }, [data]);

  function modAlreadyAdded() {
    setAlreadyAdded(true);
  }

  function returnFollow() {
    if (props.inspectUserId !== props.userId) {
      if (alreadyAdded === true) {
        return null;
      } else {
        return (
          <FollowUser
            followId={props.inspectUserId}
            followName={userProfile.username}
            modAlreadyAdded={modAlreadyAdded}
          />
        );
      }
    }
  }

  function returnUserProfile() {
    if (userProfileState === true) {
      return (
        <React.Fragment>
          <h1>{userProfile.username}</h1>
          <img src={props.inspectProfileImage} />
          {returnFollow()}
          <p>{props.inspectBio}</p>
          <h2>Followers: {userProfile.followers.length}</h2>
          <h2>Following: {userProfile.following.length}</h2>
          <UserProfilePosts posts={userProfile.posts} />
        </React.Fragment>
      );
    } else return <LoadingGeneral />;
  }

  return (
    <div key={props.userId} id="feed">
      {returnUserProfile()}
    </div>
  );
};

export const UserProfile = connect(mapStateToProps)(UserProf);
