import React, { useEffect, useState } from "react";
import IndividualUserPost from "./IndividualUserPost";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import PostPage from "./PostPage";
import { useLazyQuery } from "react-apollo";
import { queryPosts } from "../../queries/queries";

interface Props {
  posts: any;
  modRoutes: (arr: Posts[]) => void;
}

interface Posts {
  key: number;
  postId: string;
  title: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
}

const UserPosts: React.FC<Props> = (props) => {
  const [sortedArr, setSortedArr] = useState(props.posts);
  const [postId, setPostId] = useState("");
  const [postView, setPostView] = useState(false);

  useEffect(() => {
    let arr = props.posts.sort(function (a: any, b: any) {
      return b.timestamp - a.timestamp;
    });
    console.log(arr);
    setSortedArr(arr);

    props.modRoutes(arr);
  }, []);

  return (
    <div className="feed">
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
};

export default connect(mapStateToProps)(UserPosts);
