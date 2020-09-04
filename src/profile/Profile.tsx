import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../AppMain/App";
import Header from "../Header";
import ProfileContent from "./ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
import ImageBlock from "../misc/ImageBlock";
import NavBar from "../misc/NavBar";
import money from "../images/money.png";
import hat from "../images/hat.png";
import { statusContext } from "../AppMain/App";
import { browserHist } from "../AppMain/history";

const Profile: React.FC = () => {
  const { status, setStatus } = useContext(statusContext);
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

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  function zoomImg() {}

  return (
    <div>
      <NavBar />
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
    </div>
  );
};

export default Profile;
