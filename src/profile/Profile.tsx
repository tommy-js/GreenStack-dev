import React, { useContext } from "react";
import { userContext } from "../AppMain/App";
import NavBar from "../misc/NavBar";
import ProfileTabs from "./ProfileTabs";

interface Props {
  passInTradeId: (id: number) => void;
}

const Profile: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);

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
