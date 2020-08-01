import React, { useState } from "react";
import ProfileComments from "./ProfileComments";

const UserProfileComments: React.FC = () => {
  const [testData, setTestData] = useState([
    { comment: "Bad trade loser LOL", tradeId: 24423 },
    { comment: "No u", tradeId: 2245563443 },
  ]);

  function removeComment(tradeId: number) {
    let testArray = testData;
    let foundElement = testArray.find((el) => el.tradeId === tradeId);
    if (foundElement) {
      let elementIndex = testArray.indexOf(foundElement);
      testArray.splice(elementIndex, 1);
      console.log(testArray);
    }
  }

  return (
    <div>
      {testData.map((el) => (
        <ProfileComments
          removeComment={removeComment}
          comment={el.comment}
          tradeId={el.tradeId}
        />
      ))}
    </div>
  );
};

export default UserProfileComments;
