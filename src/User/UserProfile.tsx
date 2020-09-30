import React, { useState, useEffect, useContext } from "react";
import Follow from "../resolvers/Follow";
import { LoadingGeneral } from "../login/LoadingUser";
import { otherUserQuery } from "../queries/queries.js";
import { useQuery } from "react-apollo";
import { userContext } from "../AppMain/App";

interface Props {
  username: string;
  userId: string;
}

const UserProfile: React.FC<Props> = (props) => {
  const [userProfileState, setUserProfileState] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(true);
  const [userProfile, setUserProfile] = useState({} as any);
  const { userVal, setUserVal } = useContext(userContext);

  const { loading, data } = useQuery(otherUserQuery, {
    variables: { userId: props.userId },
  });

  useEffect(() => {
    let arr = userVal.following;
    let filter = arr.filter((arr: any) => arr.userId === props.userId);
    if (filter) {
      setAlreadyAdded(true);
    } else {
      setAlreadyAdded(false);
    }
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
      setUserProfileState(true);
      setUserProfile(data.user);
    }
  }, [data]);

  function returnFollow() {
    if (alreadyAdded === true) {
      return null;
    } else {
      return (
        <div>
          <Follow
            userId={userVal.userId}
            username={userVal.username}
            followerId={props.userId}
            followerName={userProfile.username}
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

export default UserProfile;
