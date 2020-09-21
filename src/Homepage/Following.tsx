import React from "react";
import FollowingElement from "./FollowingElement";

const Following: React.FC = () => {
  const testData = [
    {
      userId: 1111,
      username: "Phil",
      descriptor: "Analyst for the New York Times",
    },
    { userId: 2423, username: "Tempty", descriptor: "Good trader(sometimes)" },
  ];

  return (
    <div className="feed">
      {testData.map((el: any) => (
        <FollowingElement
          userId={el.userId}
          username={el.username}
          descriptor={el.descriptor}
        />
      ))}
    </div>
  );
};

export default Following;
