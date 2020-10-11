import React, { useState, useEffect, useContext } from "react";
import FeedModal from "./FeedModal";
import Suggested from "../Suggested";
import Post from "../Post";
import { PostType, NewsType, CommentType } from "./FeedTypes";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { useQuery } from "react-apollo";
import { userContext } from "../../AppMain/App";

interface Props {
  modRoutes: (arr: any) => void;
}

const Feed: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);
  const [testData, setTestData] = useState(userVal.posts);
  console.log(userVal);

  // const testData = [
  //   {
  //     typeId: 0,
  //     data: {
  //       title: "Analysis of the Apple announcement",
  //       text:
  //         "We can see by the Apple announcement that they clearly don't care about their base users, and are only really chasing clout.",
  //       user: "Tyler",
  //       userId: "253364746",
  //       timestamp: 2312424535,
  //       likes: 15,
  //       dislikes: 6,
  //       replies: 4,
  //       dataId: 42423,
  //       comments: [
  //         {
  //           username: "Jwd22",
  //           text:
  //             "Poor analysis. Doesn't take into account Apple's market share",
  //           timestamp: 2423231,
  //           likes: 1,
  //           dislikes: 2,
  //         },
  //         {
  //           username: "35ted",
  //           text: "Good analysis",
  //           timestamp: 335322,
  //           likes: 0,
  //           dislikes: 0,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     typeId: 1,
  //     data: {
  //       headline: "Apple Announces New Chip",
  //       name: "Apple",
  //       ticker: "AAPL",
  //       stockId: "d09a46e3-9edf-4c15-a9c6-fcabca281146",
  //       subtext:
  //         "On September 23, Apple announced a new chip to rival those of Intel and Nvidia.",
  //       dataId: 2564634,
  //       comments: [
  //         {
  //           username: "Jwd22",
  //           text:
  //             "Poor analysis. Doesn't take into account Apple's market share",
  //           timestamp: 2423231,
  //           likes: 1,
  //           dislikes: 2,
  //         },
  //         {
  //           username: "35ted",
  //           text: "Good analysis",
  //           timestamp: 335322,
  //           likes: 0,
  //           dislikes: 0,
  //         },
  //       ],
  //     },
  //   },
  //   {
  //     typeId: 2,
  //     data: {
  //       userId: "259696",
  //       user: "Tyler",
  //       text:
  //         "Apple sucks. Nvidia's chips will be better because they specialize.",
  //       timestamp: 1423123531,
  //       likes: 3,
  //       dislikes: 2,
  //       replies: 2,
  //       dataId: 4003503,
  //       comments: [
  //         {
  //           username: "Jwd22",
  //           userId: 30503252,
  //           text:
  //             "Poor analysis. Doesn't take into account Apple's market share",
  //           timestamp: 2423231,
  //           likes: 1,
  //           dislikes: 2,
  //         },
  //         {
  //           username: "35ted",
  //           userId: 39969663,
  //           text: "Good analysis",
  //           timestamp: 335322,
  //           likes: 0,
  //           dislikes: 0,
  //         },
  //         {
  //           username: "Jwd22",
  //           userId: 469963636,
  //           text:
  //             "Poor analysis. Doesn't take into account Apple's market share",
  //           timestamp: 2423231,
  //           likes: 1,
  //           dislikes: 2,
  //         },
  //         {
  //           username: "35ted",
  //           userId: 3603636363,
  //           text: "Good analysis",
  //           timestamp: 335322,
  //           likes: 0,
  //           dislikes: 0,
  //         },
  //       ],
  //     },
  //   },
  // ];

  function updateLikes(dataId: number, likes: number, dislikes: number) {
    let arr = testData;
    let foundArr = testData.find((el: any) => el.dataId === dataId);
    if (foundArr) {
      let foundIndex = arr.indexOf(foundArr);
      console.log(foundIndex);
      arr[foundIndex].likes = likes;
      arr[foundIndex].dislikes = dislikes;
    }
    console.log(testData);
  }

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < testData.length; i++) {
      if (testData[i].typeId === 0 || testData[i].typeId === 2) {
        arr.push(testData[i].userId);
      }
    }
    console.log(arr);
    props.modRoutes(arr);
  }, []);

  function conditionalRender(id: number, data: any) {
    if (id === 0) {
      return (
        <div>
          <PostType
            title={data.title}
            userId={data.userId}
            user={data.user}
            text={data.text}
            timestamp={data.timestamp}
            likes={data.likes}
            dislikes={data.dislikes}
            replies={data.replies}
            id={data.dataId}
            updateLikes={updateLikes}
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
            userId={data.userId}
            user={data.user}
            text={data.text}
            timestamp={data.timestamp}
            likes={data.likes}
            dislikes={data.dislikes}
            replies={data.replies}
            id={data.dataId}
            updateLikes={updateLikes}
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
          <div key={el.dataId} className="feed_component">
            {conditionalRender(el.typeId, el)}
            <Route exact path={`/post/${el.dataId}`}>
              <FeedModal typeId={el.typeId} data={el} />
            </Route>
          </div>
        ))}
      </Router>
    </div>
  );
};

export default Feed;
