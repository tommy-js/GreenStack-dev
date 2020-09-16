import React from "react";
import FeedComponent from "./FeedComponent";

const Feed: React.FC = () => {
  const testData = [{ typeId: 0 }, { typeId: 1 }, { typeId: 2 }];

  return (
    <div>
      {testData.map((el: any) => (
        <FeedComponent typeId={el.typeId} />
      ))}
    </div>
  );
};

export default Feed;
