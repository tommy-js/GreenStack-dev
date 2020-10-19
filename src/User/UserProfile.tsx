import React, { useState, useEffect, useContext } from "react";
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
  username: string;
  userId: string;
}

const UserProfile: React.FC<Props> = (props) => {
  const [userProfileState, setUserProfileState] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [userProfile, setUserProfile] = useState({} as any);

  const { loading, data } = useQuery(otherUserQuery, {
    variables: { userId: props.userId },
  });

  useEffect(() => {
    let arr = props.following;
    console.log("userval.following:");
    console.log(arr);
    console.log("props.userId: " + props.userId);
    let filter = arr.filter((arr: any) => arr.userId === props.userId);
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
      setUserProfile(data.user);
      setUserProfileState(true);
    }
  }, [data]);

  function modAlreadyAdded() {
    setAlreadyAdded(true);
  }

  function returnFollow() {
    if (alreadyAdded === true) {
      return null;
    } else {
      return (
        <div>
          <Follow
            userId={props.userId}
            username={props.username}
            followerId={props.userId}
            followerName={userProfile.username}
            modAlreadyAdded={modAlreadyAdded}
          />
        </div>
      );
    }
  }

  function returnUserProfile() {
    if (userProfileState === true) {
      return (
        <div>
          <h1>{userProfile.username}</h1>
          {returnFollow()}
          <p>{props.userId}</p>
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
