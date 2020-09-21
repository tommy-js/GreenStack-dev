import React from "react";
import FollowerElement from "./FollowerElement";

const Followers: React.FC = () => {
  const testData = [
    { userId: 256474, username: "johnthegreat", descriptor: "just a trader" },
    { userId: 6565653, username: "fefe", descriptor: "" },
  ];

  return (
    <div className="feed">
      {testData.map((el: any) => (
        <FollowerElement
          userId={el.userId}
          username={el.username}
          descriptor={el.descriptor}
        />
      ))}
    </div>
  );
};

export default Followers;
