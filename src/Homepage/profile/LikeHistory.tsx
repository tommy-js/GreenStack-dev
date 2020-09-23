import React from "react";
import Like from "./Like";

const LikeHistory: React.FC = () => {
  const testData = [
    { postId: 332, title: "post1" },
    { postId: 252342, title: "post1" },
  ];

  return (
    <div>
      <h2>Like History</h2>
      {testData.map((el: any) => (
        <Like key={el.postId} postId={el.postId} title={el.title} />
      ))}
    </div>
  );
};

export default LikeHistory;
