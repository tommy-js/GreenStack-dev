import React, { useState, useEffect } from "react";
import { RenderModal } from "./FeedTypes";
import Suggested from "../Suggested";
import Post from "../Post";
import { LoadingGeneral } from "../../login/LoadingUser";
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

  function renderFeed() {
    if (feed) {
      props.onFeedSet(feed);
      return (
        <div>
          {feed.map((el: any) => (
            <div className="feed_component">
              <RenderModal
                title={el.title}
                text={el.text}
                userId={el.userId}
                user={el.username}
                timestamp={el.timestamp}
                likes={el.likes}
                dislikes={el.dislikes}
                comments={el.comments}
                postId={el.postId}
                allowComments={el.allowComments}
                allowLikes={el.allowLikes}
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
    <div className="feed">
      <Post setToFeed={setToFeed} />
      <Suggested />
      {renderFeed()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
