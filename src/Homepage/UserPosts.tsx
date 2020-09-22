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

  function renderPosts() {
    if (data) {
      return (
        <div>
          {data.getPosts.map((el: any) => (
            <h1>{el.text}</h1>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }

  return <div className="feed">{renderPosts()}</div>;
};

export default UserPosts;
