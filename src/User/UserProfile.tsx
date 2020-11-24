import React, { useState, useEffect } from "react";
import Follow from "../resolvers/Follow";
import { UserProfilePosts } from "../UserProfilePosts/UserProfilePosts";
import { LoadingGeneral } from "../../login/LoadingUser";
import { otherUserQuery } from "../queries/queries.js";
import { useQuery } from "react-apollo";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";
import { FollowingItem } from "../../types/types";

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
  modRoutes: (route: any) => void;
}

const UserProf: React.FC<Props> = (props) => {
  const [userProfileState, setUserProfileState] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [userProfile, setUserProfile] = useState({} as any);

  const { data } = useQuery(otherUserQuery, {
    variables: { userId: props.inspectUserId },
  });

  useEffect(() => {
    let arr = props.following;
    let filter = arr.filter((arr: any) => arr.userId === props.inspectUserId);
    if (filter.length > 0) setAlreadyAdded(true);
    else setAlreadyAdded(false);
  }, []);

  useEffect(() => {
    if (data) {
      setUserProfile(data.altUser);
      setUserProfileState(true);
      props.modRoutes(data.altUser.posts);
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
          <div>
            <Follow
              followId={props.inspectUserId}
              followName={userProfile.username}
              modAlreadyAdded={modAlreadyAdded}
            />
          </div>
        );
      }
    }
  }

  function returnUserProfile() {
    if (userProfileState === true) {
      return (
        <div>
          <h1>{userProfile.username}</h1>
          <img src={props.inspectProfileImage} />
          {returnFollow()}
          <p>{props.inspectBio}</p>
          <h2>Followers: {userProfile.followers.length}</h2>
          <h2>Following: {userProfile.following.length}</h2>
          <UserProfilePosts posts={userProfile.posts} />
        </div>
      );
    } else {
      return (
        <div>
          <LoadingGeneral />
        </div>
      );
    }
  }

  return (
    <div key={props.userId} id="feed">
      {returnUserProfile()}
    </div>
  );
};

export const UserProfile = connect(mapStateToProps)(UserProf);
