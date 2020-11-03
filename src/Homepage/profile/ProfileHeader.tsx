import React, { useState } from "react";
import SetBio from "../../resolvers/SetBio";
import money from "../../images/money.png";
import edit from "../../images/edit.png";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Redux {
  username: any;
  bio: any;
}

const ProfileHeader: React.FC<Redux> = (props) => {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(props.bio);

  function modEditing(isEdit: boolean) {
    setEditing(isEdit);
  }

  function returnEditing() {
    if (editing === true) {
      return (
        <div>
          <textarea
            id="bio_edit_textarea"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
          <SetBio bio={bio} modEditing={modEditing} />
        </div>
      );
    } else {
      return (
        <div onClick={() => setEditing(true)}>
          <div id="left_container">
            <p id="profile_header_bio">{bio}</p>
          </div>
          <div id="right_container">
            <img id="bio_image" src={edit} />
          </div>
        </div>
      );
    }
  }

  return (
    <div id="profile_header">
      <div id="profile_header_container">
        <div id="profile_image_container">
          <img id="img_id" src={money} />
        </div>
        <h2 id="profile_header_username">{props.username}</h2>
      </div>
      <div id="profile_bio_container">{returnEditing()}</div>
    </div>
  );
};

export default connect(mapStateToProps)(ProfileHeader);
