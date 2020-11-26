import React, { useState } from "react";
import { SetBio } from "../SetBio/SetBio";
import { SaveProfileImage } from "../SaveProfileImage/SaveProfileImage";
import { BioCounter } from "../BioCounter/BioCounter";
import { ProfileDropzone } from "../ProfileDropzone/ProfileDropzone";
import edit from "../../../images/edit.png";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";

interface Redux {
  profileImage: string;
  username: string;
  bio: string;
  onProfileImageSet: (profileImage: string) => void;
}

const ProfileHeaderRender: React.FC<Redux> = (props) => {
  const [profileImage, setProfileImage] = useState(props.profileImage);
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(props.bio);
  const [editingProfileImage, setEditingProfileImage] = useState(false);

  function modEditing(isEdit: boolean) {
    setEditing(isEdit);
  }

  function returnEditing() {
    if (editing === true) {
      return (
        <React.Fragment>
          <textarea
            id="bio_edit_textarea"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
          <SetBio bio={bio} modEditing={modEditing} />
          <BioCounter bio={bio} />
        </React.Fragment>
      );
    } else {
      return (
        <div onClick={() => setEditing(true)}>
          <div id="left_container">
            <p id="bio_edit_textarea">{bio}</p>
          </div>
          <div id="right_container">
            <img id="bio_image" src={edit} />
          </div>
        </div>
      );
    }
  }

  function modifyImg(imgData: any) {
    setProfileImage(imgData);
  }

  function saveImage(img: string) {
    props.onProfileImageSet(img);
  }

  function renderDropzone() {
    if (editingProfileImage === true) {
      return (
        <React.Fragment>
          <ProfileDropzone modifyImg={modifyImg} />
          <SaveProfileImage image={profileImage} saveImage={saveImage} />
        </React.Fragment>
      );
    } else return null;
  }

  return (
    <div id="profile_header">
      <div id="profile_header_container">
        <div
          id="profile_image_container"
          onClick={() => setEditingProfileImage(!editingProfileImage)}
        >
          <img id="img_id" src={profileImage} />
        </div>
        <h2 id="profile_header_username">{props.username}</h2>
      </div>
      <div id="profile_bio_container">{returnEditing()}</div>
      {renderDropzone()}
    </div>
  );
};

export const ProfileHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeaderRender);
