import React, { useEffect, useState } from "react";
import Header from "../Header";
import ProfileContent from "./ProfileContent";
import ProfileSidebar from "./ProfileSidebar";
import ImageBlock from "../misc/ImageBlock";
import money from "../images/money.png";
import hat from "../images/hat.png";

interface Props {
  username: string;
  profileImage: string;
  passInTradeId: (id: number) => void;
}

const ProfileTabs: React.FC<Props> = (props) => {
  const images = [
    { url: hat, id: 0 },
    { url: money, id: 1 },
  ];
  const [profile, setProfile] = useState({ url: "", id: 0 });

  useEffect(() => {
    let foundImg = images.find((el) => el.url === props.profileImage);
    if (foundImg) {
      setProfile({ url: foundImg.url, id: foundImg.id });
      console.log(foundImg.url);
    }
  }, []);

  function zoomImg() {}

  return (
    <div>
      <ImageBlock image={props.profileImage} id={profile.id} setImg={zoomImg} />
      <Header text={props.username} />
      <div id="profile_body">
        <ProfileSidebar />
        <ProfileContent passInTradeId={props.passInTradeId} />
      </div>
    </div>
  );
};

export default ProfileTabs;
