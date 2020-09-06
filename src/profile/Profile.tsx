import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../AppMain/App";
import NavBar from "../misc/NavBar";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";
import { Route } from "react-router-dom";
import ProfileTabs from "./ProfileTabs";

interface Props {
  passInTradeId: (id: number) => void;
}

const Profile: React.FC<Props> = (props) => {
  const { status, setStatus } = useContext(statusContext);
  const { userVal, setUserVal } = useContext(userContext);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <div id="profile">
        <ProfileTabs
          username={userVal.username}
          profileImage={userVal.profileImage}
          passInTradeId={props.passInTradeId}
        />
      </div>
    </div>
  );
};

export default Profile;
