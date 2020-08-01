import React, { useContext } from "react";
import { userContext } from "./App";
import Header from "./Header";
import ProfileContent from "./ProfileContent";
import ProfileSidebar from "./ProfileSidebar";

const Profile: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);
  return (
    <div id="profile">
      <Header text={userVal.username} />
      <div id="profile_body">
        <ProfileSidebar />
        <ProfileContent />
      </div>
    </div>
  );
};

export default Profile;
