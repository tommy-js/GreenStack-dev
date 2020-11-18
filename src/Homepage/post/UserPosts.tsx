import React, { useEffect, useState } from "react";
import IndividualUserPost from "./IndividualUserPost";
import FeedModal from "../feed/FeedModal";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

interface Redux {
  posts: any;
  feed: any;
}

interface Props extends Redux {
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
  const [postRendered, setPostRendered] = useState(false);
  const [postInfo, setPostInfo] = useState();

  useEffect(() => {
    let arr = props.posts.sort(function (a: any, b: any) {
      return b.timestamp - a.timestamp;
    });
    setSortedArr(arr);

    props.modRoutes(arr);
  }, []);

  function modPostLoad(postId: string) {
    const feed = document.getElementById("feed")!;
    if (postRendered === true) {
      setPostRendered(false);
      enableBodyScroll(feed);
    } else {
      setPostRendered(true);
      disableBodyScroll(feed);
    }
    triggerPostLoad(postId);
  }

  function triggerPostLoad(postId: string) {
    let foundId = props.feed.find((el: any) => postId === el.postId);
    if (foundId) {
      let foundIndex = props.feed.indexOf(foundId);
      setPostInfo(props.feed[foundIndex]);
    }
  }

  function conditionalPostRendering() {
    if (postRendered === true) {
      return <FeedModal data={postInfo} modPostLoad={modPostLoad} />;
    } else return null;
  }

  return (
    <div id="feed">
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
            modPostLoad={modPostLoad}
          />
        ))}
        {conditionalPostRendering()}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(UserPosts);
