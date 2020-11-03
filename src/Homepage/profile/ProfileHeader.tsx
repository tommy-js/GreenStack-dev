import React from "react";
import money from "../../images/money.png";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Redux {
  username: any;
  bio: any;
}

const ProfileHeader: React.FC<Redux> = (props) => {
  return (
    <div id="profile_header">
      <div id="profile_header_container">
        <div id="profile_image_container">
          <img id="img_id" src={money} />
        </div>
        <h2 id="profile_header_username">{props.username}</h2>
      </div>
      <h3 id="profile_header_bio">{props.bio}</h3>
    </div>
  );
};

export default connect(mapStateToProps)(ProfileHeader);
