import React from "react";
import { Like } from "../Like/Like";

type Post = {
  postId: string;
  title: string;
};

export const LikeHistory: React.FC = () => {
  const testData = [
    { postId: "332", title: "post1" },
    { postId: "252342", title: "post1" },
  ];

  return (
    <React.Fragment>
      <h2>Like History</h2>
      {testData.map((el: Post) => (
        <Like key={el.postId} postId={el.postId} title={el.title} />
      ))}
    </React.Fragment>
  );
};
