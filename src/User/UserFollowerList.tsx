import React, { useContext, useEffect, useState } from "react";
import { userContext, statusContext } from "../AppMain/App";
import UserAccountSnippet from "./UserAccountSnippet";
import SettingsInputBox from "./SettingsInputBox";
import { browserHist } from "../AppMain/history.js";

const UserFollowerList: React.FC = () => {
  const [stateHide, setStateHide] = useState(false);
  const [updateBlocked, setUpdateBlocked] = useState(false);
  const { userVal, setUserVal } = useContext(userContext);

  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  const [followers, setFollowers] = useState([
    {
      key: 0,
      user: "",
      listingId: 0,
      userId: 0,
    },
  ]);

  useEffect(() => {
    setFollowers(userVal.followers);
  }, [userVal]);

  // const [testData, setTestData] = useState([
  //   { user: "John", userId: 0, blocked: false },
  //   { user: "James", userId: 1, blocked: true },
  //   { user: "Jimmothy", userId: 2, blocked: false },
  // ]);

  function passInHide() {
    setStateHide(!stateHide);
  }

  // function modBlock(userId: number, blocked: boolean) {
  //   setUpdateBlocked(!updateBlocked);
  //   let testArray = testData;
  //   let testElement = testArray.find((el) => el.userId === userId);
  //   if (testElement) {
  //     let testIndex = testArray.indexOf(testElement);
  //     testElement.blocked = blocked;
  //     testArray[testIndex] = testElement;
  //     setTestData(testArray);
  //   }
  // }

  return (
    <div>
      <SettingsInputBox
        text="Show blocked"
        isChecked={false}
        passInHide={passInHide}
      />
      {followers.map((el: any) => (
        <UserAccountSnippet
          key={el.id}
          user={el.followerName}
          listingId={el.id}
          userId={el.followerId}
          blocked={el.blocked}
          stateHide={stateHide}
          // modBlock={modBlock}
          updateBlocked={updateBlocked}
        />
      ))}
    </div>
  );
};

export default UserFollowerList;
