import React from "react";
import { PostType, NewsType, CommentType } from "./FeedTypes";

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
      },
    },
  ];

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
          />
        </div>
      );
    }
  }

  return (
    <div>
      {testData.map((el: any) => (
        <div className="feed_component">
          {conditionalRender(el.typeId, el.data)}
        </div>
      ))}
    </div>
  );
};

export default Feed;
