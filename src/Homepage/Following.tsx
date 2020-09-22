import React, { useEffect } from "react";
import FollowingElement from "./FollowingElement";

interface Props {
  modRoutes: (testData: any) => void;
}

const Following: React.FC<Props> = (props) => {
  const testData = [
    {
      userId: 1111,
      username: "Phil",
      descriptor: "Analyst for the New York Times",
    },
    { userId: 2423, username: "Tempty", descriptor: "Good trader(sometimes)" },
  ];

  useEffect(() => {
    props.modRoutes(testData);
  }, []);

  return (
    <div className="feed">
      <h2 className="list_header">Following</h2>
      <div>
        {testData.map((el: any) => (
          <FollowingElement
            userId={el.userId}
            username={el.username}
            descriptor={el.descriptor}
          />
        ))}
      </div>
    </div>
  );
};

export default Following;
