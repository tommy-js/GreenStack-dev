import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { enableBodyScroll } from "body-scroll-lock";

type Routes = {
  username: string;
  userId: string;
  bio: string;
  profileImage: string;
};

interface Redux {
  userRoutes: any;
  onUserRouteSet: (userRoutes: any) => void;
}

interface Props extends Redux {
  highlightUsername: string;
  highlightUserId: string;
  highlightBio: string;
  highlightProfileImage: string;
}

const UserIndex: React.FC<Props> = (props) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let foundInd = props.userRoutes.find(
      (el: Routes) => el.userId === props.highlightUserId
    );
    if (!foundInd) {
      let obj = {
        username: props.highlightUsername,
        userId: props.highlightUserId,
        bio: props.highlightBio,
        profileImage: props.highlightProfileImage,
      };
      let arr = [...props.userRoutes, obj];
      props.onUserRouteSet(arr);
    }
  }, []);

  function unlockScrollState() {
    const feed = document.getElementById("feed");
    if (feed) enableBodyScroll(feed);
  }

  function returnHoverOver() {
    if (hovered === true) {
      return (
        <div className="transparent_outer">
          <div className="user_index_hover_block">
            <div className="user_index_hover_img_block">
              <img
                className="user_index_hover_img"
                src={props.highlightProfileImage}
              />
            </div>
            <p className="user_index_hover_username">
              {props.highlightUsername}
            </p>
            <p className="user_index_hover_bio">{props.highlightBio}</p>
          </div>
        </div>
      );
    } else return null;
  }

  return (
    <div
      className="user_comment_index"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        onClick={() => unlockScrollState()}
        to={`/home/user/${props.highlightUserId}`}
      >
        <div className="username_tag_block">
          <span className="username_tag">@{props.highlightUsername}</span>
        </div>
        <div className="hover_comp">{returnHoverOver()}</div>
      </Link>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex);
