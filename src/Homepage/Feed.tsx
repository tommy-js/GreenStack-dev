import React, { useEffect } from "react";
import FeedModal from "./FeedModal";
import Suggested from "./Suggested";
import Post from "./Post";
import { PostType, NewsType, CommentType } from "./FeedTypes";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const Feed: React.FC = () => {
  const testData = [
    {
      typeId: 0,
      data: {
        title: "Analysis of the Apple announcement",
        text:
          "We can see by the Apple announcement that they clearly don't care about their base users, and are only really chasing clout.",
        user: "Tyler",
        timestamp: 2312424535,
        likes: 15,
        dislikes: 6,
        replies: 4,
        dataId: 42423,
        comments: [
          {
            username: "Jwd22",
            text:
              "Poor analysis. Doesn't take into account Apple's market share",
            timestamp: 2423231,
            likes: 1,
            dislikes: 2,
          },
          {
            username: "35ted",
            text: "Good analysis",
            timestamp: 335322,
            likes: 0,
            dislikes: 0,
          },
        ],
      },
    },
    {
      typeId: 1,
      data: {
        headline: "Apple Announces New Chip",
        name: "Apple",
        ticker: "AAPL",
        subtext:
          "On September 23, Apple announced a new chip to rival those of Intel and Nvidia.",
        dataId: 2564634,
        comments: [
          {
            username: "Jwd22",
            text:
              "Poor analysis. Doesn't take into account Apple's market share",
            timestamp: 2423231,
            likes: 1,
            dislikes: 2,
          },
          {
            username: "35ted",
            text: "Good analysis",
            timestamp: 335322,
            likes: 0,
            dislikes: 0,
          },
        ],
      },
    },
    {
      typeId: 2,
      data: {
        user: "Tyler",
        text:
          "Apple sucks. Nvidia's chips will be better because they specialize.",
        timestamp: 1423123531,
        likes: 3,
        dislikes: 2,
        replies: 2,
        dataId: 4003503,
        comments: [
          {
            username: "Jwd22",
            text:
              "Poor analysis. Doesn't take into account Apple's market share",
            timestamp: 2423231,
            likes: 1,
            dislikes: 2,
          },
          {
            username: "35ted",
            text: "Good analysis",
            timestamp: 335322,
            likes: 0,
            dislikes: 0,
          },
          {
            username: "Jwd22",
            text:
              "Poor analysis. Doesn't take into account Apple's market share",
            timestamp: 2423231,
            likes: 1,
            dislikes: 2,
          },
          {
            username: "35ted",
            text: "Good analysis",
            timestamp: 335322,
            likes: 0,
            dislikes: 0,
          },
        ],
      },
    },
  ];

  useEffect(() => {
    testData.map((el: any) => console.log(el.data.dataId));
  }, []);

  function conditionalRender(id: number, data: any) {
    if (id === 0) {
      return (
        <div>
          <PostType
            title={data.title}
            user={data.user}
            text={data.text}
            timestamp={data.timestamp}
            likes={data.likes}
            dislikes={data.dislikes}
            replies={data.replies}
            id={data.dataId}
          />
        </div>
      );
    } else if (id === 1) {
      return (
        <div>
          <NewsType
            headline={data.title}
            name={data.name}
            ticker={data.ticker}
            subtext={data.subtext}
            id={data.dataId}
          />
        </div>
      );
    } else if (id === 2) {
      return (
        <div>
          <CommentType
            user={data.user}
            text={data.text}
            timestamp={data.timestamp}
            likes={data.likes}
            dislikes={data.dislikes}
            replies={data.replies}
            id={data.dataId}
          />
        </div>
      );
    }
  }

  return (
    <div className="feed">
      <Post />
      <Suggested />
      <Router>
        {testData.map((el: any) => (
          <div className="feed_component">
            {conditionalRender(el.typeId, el.data)}
            <Route exact path={`/post/${el.data.dataId}`}>
              <FeedModal typeId={el.typeId} data={el.data} />
            </Route>
          </div>
        ))}
      </Router>
    </div>
  );
};

export default Feed;
