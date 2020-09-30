import React, { useState, useEffect, useContext } from "react";
import Follow from "../resolvers/Follow";
import { LoadingGeneral } from "../login/LoadingUser";
import { otherUserQuery } from "../queries/queries.js";
import { useQuery } from "react-apollo";
import { userContext } from "../AppMain/App";

interface Props {
  userId: string;
}

const UserProfile: React.FC<Props> = (props) => {
  const [userProfileState, setUserProfileState] = useState(false);
  const [userProfile, setUserProfile] = useState({} as any);
  const { userVal, setUserVal } = useContext(userContext);

  const { loading, data } = useQuery(otherUserQuery, {
    variables: { userId: props.userId },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setUserProfileState(true);
      setUserProfile(data.user);
    }
  }, [data]);

  function returnUserProfile() {
    if (userProfileState === true) {
      return (
        <div>
          <h1>{userProfile.username}</h1>
          <Follow
            userId={userVal.userId}
            username={userVal.username}
            followerId={props.userId}
            followerName={userProfile.username}
          />
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
