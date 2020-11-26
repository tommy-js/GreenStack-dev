import React, { useState, useEffect } from "react";
import { FeedElement } from "../FeedElement/FeedElement";
import { FeedModal } from "../FeedModal/FeedModal";
import { Suggested } from "../../Suggested/Suggested";
import { PostRender } from "../../PostRender/PostRender";
import { FeedScrolledBottom } from "../FeedScrolledBottom/FeedScrolledBottom";
import { LoadingGeneral } from "../../../login/Loading/Loading";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useQuery } from "react-apollo";
import { returnFeedQuery } from "../../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import { PostItem, FeedItem } from "../../../types/types";

interface Props {
  posts: PostItem[];
  modRoutes: (arr: any) => void;
  onFeedSet: (feed: FeedItem[]) => void;
}

const FeedRender: React.FC<Props> = (props) => {
  const [postRendered, setPostRendered] = useState(false);
  const [postInfo, setPostInfo] = useState();
  const { data } = useQuery(returnFeedQuery, {
    variables: { token: sessionStorage.getItem("Token") },
    pollInterval: 200,
  });
  const [feed, setFeed] = useState();
  const [maxFeed, setMaxFeed] = useState();
  const [view, setView] = useState(0);

  useEffect(() => {
    if (data) {
      setFeed(data.returnFollowerFeed.posts);

      let arr = [
        ...data.returnFollowerFeed.posts,
        ...data.returnFollowerFeed.likes,
        ...data.returnFollowerFeed.comments,
      ];
      arr.sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });
      setMaxFeed(arr);
      let shortenedFeed = arr.slice(0, 10);
      setFeed(shortenedFeed);
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
    setMaxFeed(arr);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setView(window.scrollY);
    });
  }, []);

  function loadMore(index: number) {
    let maximumRendered = 5;
    if (index > feed.length - maximumRendered) {
      if (feed.length + maximumRendered < maxFeed.length) {
        let shortenedFeed = maxFeed.slice(0, feed.length + maximumRendered + 5);
        setFeed(shortenedFeed);
      }
    }
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
        <React.Fragment>
          {feed.map((el: any) => (
            <div className="feed_component">
              <FeedElement
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
                type={el.__typename}
                reference={el.reference}
                view={view}
                currentIndex={feed.indexOf(el)}
                loadMore={loadMore}
              />
            </div>
          ))}
          <FeedScrolledBottom />
        </React.Fragment>
      );
    } else return <LoadingGeneral />;
  }

  return (
    <div id="feed">
      <PostRender setToFeed={setToFeed} />
      <Suggested />
      {conditionalPostRendering()}
      {renderFeed()}
    </div>
  );
};

export const Feed = connect(mapStateToProps, mapDispatchToProps)(FeedRender);
