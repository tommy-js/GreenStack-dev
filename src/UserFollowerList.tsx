import React, { useEffect, useState } from "react";
import UserAccountSnippet from "./UserAccountSnippet";
import SettingsInputBox from "./SettingsInputBox";

const UserFollowerList: React.FC = () => {
  const [stateHide, setStateHide] = useState(false);
  const [updateBlocked, setUpdateBlocked] = useState(false);

  const [testData, setTestData] = useState([
    { user: "John", userId: 0, blocked: false },
    { user: "James", userId: 1, blocked: true },
    { user: "Jimmothy", userId: 2, blocked: false },
  ]);

  function passInHide() {
    setStateHide(!stateHide);
  }

  function modBlock(userId: number, blocked: boolean) {
    setUpdateBlocked(!updateBlocked);
    let testArray = testData;
    let testElement = testArray.find((el) => el.userId === userId);
    if (testElement) {
      let testIndex = testArray.indexOf(testElement);
      testElement.blocked = blocked;
      testArray[testIndex] = testElement;
      setTestData(testArray);
    }
  }

  return (
    <div>
      <SettingsInputBox
        text="Show blocked"
        isChecked={false}
        passInHide={passInHide}
      />
      {testData.map((el) => (
        <UserAccountSnippet
          key={el.userId}
          user={el.user}
          userId={el.userId}
          blocked={el.blocked}
          stateHide={stateHide}
          modBlock={modBlock}
          updateBlocked={updateBlocked}
        />
      ))}
    </div>
  );
};

export default UserFollowerList;
