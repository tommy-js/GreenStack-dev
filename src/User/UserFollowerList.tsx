import React, { useContext, useEffect, useState } from "react";
import { statusContext } from "../AppMain/App";
import UserAccountSnippet from "./UserAccountSnippet";
import SettingsInputBox from "./SettingsInputBox";
import { browserHist } from "../AppMain/history.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  followers: any;
}

const UserFollowerList: React.FC<Redux> = (props) => {
  const [stateHide, setStateHide] = useState(false);
  const [updateBlocked, setUpdateBlocked] = useState(false);

  const { status, setStatus } = useContext(statusContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

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
      {props.followers.map((el: any) => (
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

export default connect(mapStateToProps)(UserFollowerList);
