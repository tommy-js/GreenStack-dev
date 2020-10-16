import React, { useContext } from "react";
import { userContext } from "../AppMain/App";
// ONLY FOR TEST
import profileImage from "../images/generic_icon.png";

const ProfileImage: React.FC = () => {
  const { userVal, setUserVal } = useContext(userContext);

  return (
    <div id="profile_image_block">
      <img id="profile_image" src={profileImage} />
    </div>
  );
};

export default ProfileImage;
