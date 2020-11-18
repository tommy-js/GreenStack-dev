import React, { useState, useEffect } from "react";
import FeedPost from "./FeedPost";
import FeedModal from "./FeedModal";
import Suggested from "../Suggested";
import Post from "../Post";
import { LoadingGeneral } from "../../login/LoadingUser";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useQuery } from "react-apollo";
import { returnFeedQuery } from "../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";

interface Props {
  posts: any;
  modRoutes: (arr: any) => void;
  onFeedSet: (feed: any) => void;
}

const Feed: React.FC<Props> = (props) => {
  let token = sessionStorage.getItem("Token");
  const [postRendered, setPostRendered] = useState(false);
  const [postInfo, setPostInfo] = useState();
  const { data } = useQuery(returnFeedQuery, {
    variables: { token: token },
    pollInterval: 200,
  });
  const [loaded, setLoaded] = useState(false);
  const [feed, setFeed] = useState();

  useEffect(() => {
    if (data) {
      setLoaded(true);
      console.log(data);
      setFeed(data.returnFollowerFeed.posts);
      console.log(data.returnFollowerFeed);
      let arr = [...data.returnFollowerFeed.posts];
      arr.sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });
      setFeed(arr);
    }
  }, [data]);

  function setToFeed(
    title: string,
    text: string,
    username: string,
    timestamp: number
  ) {
    let arr = [...feed];
    let obj = {
      title: title,
      text: text,
      user: username,
      timestamp: timestamp,
    };
    arr.push(obj);
    arr.sort(function (a, b) {
      return b.timestamp - a.timestamp;
    });
    setFeed(arr);
  }

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
    let foundId = feed.find((el: any) => postId === el.postId);
    if (foundId) {
      let foundIndex = feed.indexOf(foundId);
      setPostInfo(feed[foundIndex]);
    }
  }

  function conditionalPostRendering() {
    if (postRendered === true) {
      return <FeedModal data={postInfo} modPostLoad={modPostLoad} />;
    } else return null;
  }

  function renderFeed() {
    if (feed) {
      props.onFeedSet(feed);
      return (
        <div>
          {feed.map((el: any) => (
            <div className="feed_component">
              <FeedPost
                title={el.title}
                text={el.text}
                postProfileImage={el.profileImage}
                postImage={el.postImage}
                postUserId={el.userId}
                postUsername={el.username}
                timestamp={el.timestamp}
                likes={el.likes}
                dislikes={el.dislikes}
                comments={el.comments}
                postId={el.postId}
                allowComments={el.allowComments}
                allowLikes={el.allowLikes}
                modPostLoad={modPostLoad}
              />
            </div>
          ))}
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
    <div id="feed">
      <Post setToFeed={setToFeed} />
      <Suggested />
      {conditionalPostRendering()}
      {renderFeed()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
