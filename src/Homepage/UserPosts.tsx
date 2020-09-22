import React, { useEffect, useContext } from "react";
import { useLazyQuery } from "react-apollo";
import { queryPosts } from "../queries/queries";
import { userContext } from "../AppMain/App";

const UserPosts: React.FC = () => {
  const [callPosts, { loading, data }] = useLazyQuery(queryPosts);
  const { userVal } = useContext(userContext);

  useEffect(() => {
    callPosts({ variables: { userId: userVal.userId } });
  }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return <div className="feed"></div>;
};

export default UserPosts;
