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
  });
  const [loaded, setLoaded] = useState(false);
  const [feed, setFeed] = useState();

  useEffect(() => {
    if (data) {
      setLoaded(true);
      setFeed(data.returnFollowerFeed.posts);
      console.log(data.returnFollowerFeed.posts);
    }
  }, [data]);

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
      <Post />
      <Suggested />
      {renderFeed()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
