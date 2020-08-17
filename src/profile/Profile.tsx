import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../AppMain/App";
import Header from "../Header";
import ProfileContent from "./ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
import ImageBlock from "../misc/ImageBlock";
import money from "../images/money.png";
import hat from "../images/hat.png";

const Profile: React.FC = () => {
  const images = [
    { url: hat, id: 0 },
    { url: money, id: 1 },
  ];
  const [profile, setProfile] = useState({ url: "", id: 0 });
  const { userVal, setUserVal } = useContext(userContext);

  useEffect(() => {
    let foundImg = images.find((el) => el.url === userVal.profileImage);
    if (foundImg) {
      setProfile({ url: foundImg.url, id: foundImg.id });
      console.log(foundImg.url);
    }
  }, []);

  function zoomImg() {}

  return (
    <div id="profile">
      <ImageBlock
        image={userVal.profileImage}
        id={profile.id}
        setImg={zoomImg}
      />
      <Header text={userVal.username} />
      <div id="profile_body">
        <ProfileSidebar />
        <ProfileContent />
      </div>
    </div>
  );
};

export default Profile;
