import React, { useState, useEffect } from "react";
import Follow from "../resolvers/Follow";
import UserProfilePosts from "./UserProfilePosts";
import { LoadingGeneral } from "../login/LoadingUser";
import { otherUserQuery } from "../queries/queries.js";
import { useQuery } from "react-apollo";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  userId: any;
  username: string;
  following: any;
}

interface Props extends Redux {
  inspectUsername: string;
  inspectProfileImage: string;
  inspectUserId: string;
  inspectBio: string;
  modRoutes: (route: any) => void;
}

const UserProfile: React.FC<Props> = (props) => {
  const [userProfileState, setUserProfileState] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [userProfile, setUserProfile] = useState({} as any);

  const { loading, data } = useQuery(otherUserQuery, {
    variables: { userId: props.inspectUserId },
  });

  useEffect(() => {
    let arr = props.following;
    console.log("userval.following:");
    console.log(arr);
    console.log("props.userId: " + props.userId);
    let filter = arr.filter((arr: any) => arr.userId === props.inspectUserId);
    console.log("filter:");
    console.log(filter);
    if (filter.length > 0) {
      setAlreadyAdded(true);
    } else {
      setAlreadyAdded(false);
    }
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
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
    <div key={props.userId} className="feed">
      {returnUserProfile()}
    </div>
  );
};

export default connect(mapStateToProps)(UserProfile);
