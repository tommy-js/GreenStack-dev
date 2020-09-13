import React, { useContext, useState, useEffect } from "react";
import { userContext } from "../AppMain/App";
import Suggested from "./Suggested";
import Profile from "../profile/Profile";
import FollowedActivity from "../profile/FollowedActivity";
import LoadingUser from "../login/LoadingUser";
import UserFeed from "./UserFeed";
import NavBar from "../misc/NavBar";
import { userQuery } from "../queries/queries";
import { flowRight as compose } from "lodash";
import { graphql, useLazyQuery } from "react-apollo";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

interface Props {
  updateConstantActivity: (passInActivity: any) => void;
}

const Homepage: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const [userId, setUserId] = useState();
  const { userVal, setUserVal } = useContext(userContext);
  const [getUser, { data, loading }] = useLazyQuery(userQuery);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div id="homepage">
        <Suggested />
        <UserFeed />
      </div>
    </div>
  );
};

export default compose(graphql(userQuery, { name: "userQuery" }))(Homepage);
