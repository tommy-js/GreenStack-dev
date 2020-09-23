import React, { useEffect, useState, useContext } from "react";
import IndividualUserPost from "./IndividualUserPost";
import { useLazyQuery } from "react-apollo";
import { queryPosts } from "../queries/queries";
import { userContext } from "../AppMain/App";

interface Props {
  modRoutes: (arr: Posts[]) => void;
}

interface Posts {
  key: number;
  postId: number;
  title: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

const UserPosts: React.FC<Props> = (props) => {
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
      props.modRoutes(arr);
    }
  }, [data]);

  function renderPosts() {
    if (sortedArr) {
      return (
        <div>
          <h2 className="list_header">Your Posts</h2>
          <div>
            {sortedArr.map((el: Posts) => (
              <IndividualUserPost
                key={el.timestamp}
                postId={el.postId}
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
