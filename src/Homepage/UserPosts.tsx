import React, { useEffect, useState, useContext } from "react";
import IndividualUserPost from "./IndividualUserPost";
import { useLazyQuery } from "react-apollo";
import { queryPosts } from "../queries/queries";
import { userContext } from "../AppMain/App";

const UserPosts: React.FC = () => {
  const [sortedArr, setSortedArr] = useState();
  const [callPosts, { loading, data }] = useLazyQuery(queryPosts);
  const { userVal } = useContext(userContext);

  useEffect(() => {
    callPosts({ variables: { userId: userVal.userId } });
  }, []);

  useEffect(() => {
    if (data) {
      let arr = data.getPosts.sort(function (a: any, b: any) {
        return b.timestamp - a.timestamp;
      });
      setSortedArr(arr);
    }
  }, [data]);

  function renderPosts() {
    if (sortedArr) {
      return (
        <div>
          <h2 className="list_header">Your Posts</h2>
          <div>
            {sortedArr.map((el: any) => (
              <IndividualUserPost
                title={el.title}
                text={el.text}
                timestamp={el.timestamp}
                likes={el.likes}
                dislikes={el.dislikes}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  return <div className="feed">{renderPosts()}</div>;
};

export default UserPosts;
