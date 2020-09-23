import React, { useEffect } from "react";
import FollowerElement from "./FollowerElement";

interface Props {
  modRoutes: (arr: any) => void;
}

const Followers: React.FC<Props> = (props) => {
  const testData = [
    { userId: 256474, username: "johnthegreat", descriptor: "just a trader" },
    { userId: 6565653, username: "fefe", descriptor: "" },
  ];

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < testData.length; i++) {
      arr.push(testData[i].userId);
    }
    props.modRoutes(arr);
  }, []);

  return (
    <div className="feed">
      <h2 className="list_header">Your Followers</h2>
      <div>
        {testData.map((el: any) => (
          <FollowerElement
            userId={el.userId}
            username={el.username}
            descriptor={el.descriptor}
          />
        ))}
      </div>
    </div>
  );
};

export default Followers;
