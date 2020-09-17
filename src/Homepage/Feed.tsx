import React from "react";
import { PostType, NewsType, CommentType } from "./FeedTypes";

const Feed: React.FC = () => {
  const testData = [
    { typeId: 0, data: { title: "title 1" } },
    { typeId: 1, data: { title: "title 2" } },
    { typeId: 2, data: { user: "Tyler" } },
  ];

  function conditionalRender(id: number, data: any) {
    if (id === 0) {
      return (
        <div>
          <PostType title={data.title} />
        </div>
      );
    } else if (id === 1) {
      return (
        <div>
          <NewsType title={data.title} />
        </div>
      );
    } else if (id === 2) {
      return (
        <div>
          <CommentType user={data.user} />
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
