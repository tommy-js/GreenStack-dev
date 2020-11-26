import React, { useState, useEffect } from "react";
import { LikePost } from "../LikePost/LikePost";
import { DislikePost } from "../DislikePost/DislikePost";
import { InlineUnfollow } from "../InlineUnfollow/InlineUnfollow";
import { UserIndex } from "../../../about/UserIndex/UserIndex";
import { Link } from "react-router-dom";
import comment from "../../../images/comment.png";
import { returnDate } from "./index";
import { returnTaggedString } from "../../../globals/functions/returnTagged";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import { enableBodyScroll } from "body-scroll-lock";

type Routes = {
  username: string;
  userId: string;
  bio: string;
  profileImage: string;
};

interface Mapper {
  tag: string;
}

interface Redux {
  userRoutes: any;
  onUserRouteSet: (userRoutes: any) => void;
}

interface Props extends Redux {
  title: string;
  postUserId: string;
  postProfileImage: string;
  postImage: string;
  postUsername: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  comments: any;
  postId: string;
  allowComments: boolean;
  allowLikes: boolean;
  currentIndex: number;
  view: number;
  loadMore: (val: number) => void;
  modPostLoad: (postId: string) => void;
}

const FeedPostRender: React.FC<Props> = (props) => {
  const [over, setOver] = useState(false);
  const [styledOpac, setStyledOpac] = useState(0);

  useEffect(() => {
    let postElement = document.getElementById(`id_${props.postId}`);
    if (postElement) {
      const rect = postElement.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      )
        props.loadMore(props.currentIndex);
    }
  }, [props.view]);

  function returnAllowed() {
    if (props.allowLikes === true) {
      return (
        <React.Fragment>
          <div className="post_values">
            <span className="post_value_inner">{props.likes}</span>
          </div>
          <LikePost
            userId={props.postUserId}
            postUsername={props.postUsername}
            postId={props.postId}
          />
          <div className="post_values">
            <span className="post_value_inner">{props.dislikes}</span>
          </div>
          <DislikePost
            userId={props.postUserId}
            postUsername={props.postUsername}
            postId={props.postId}
          />
          <div className="post_values">
            <span className="post_value_inner">{props.comments.length}</span>
          </div>
          <div className="like_button_block">
            <img className="like_button_image" src={comment} />
          </div>
        </React.Fragment>
      );
    } else return null;
  }

  useEffect(() => {
    if (over === true) setStyledOpac(1);
    else setStyledOpac(0);
  }, [over]);

  useEffect(() => {
    let foundInd = props.userRoutes.find(
      (el: Routes) => el.userId === props.postUserId
    );
    if (!foundInd) {
      let obj = {
        username: props.postUsername,
        userId: props.postUserId,
        bio: "",
        profileImage: "",
      };
      let arr = [...props.userRoutes, obj];
      props.onUserRouteSet(arr);
    }
  }, []);

  function returnText() {
    let tag = returnTaggedString(props.text);
    return (
      <React.Fragment>
        {tag.map((el: any) => (
          <IndMapper tag={el} />
        ))}
      </React.Fragment>
    );
  }

  function unlockScrollState() {
    const feed = document.getElementById("feed")!;
    if (feed) enableBodyScroll(feed);
  }

  function returnImage() {
    if (props.postImage == "null") {
      return null;
    } else {
      return (
        <div className="post_image_block">
          <img className="post_image" src={props.postImage} />
        </div>
      );
    }
  }

  return (
    <div id={`id_${props.postId}`}>
      <div
        className="feed_link_header"
        onMouseOver={() => setOver(true)}
        onMouseOut={() => setOver(false)}
      >
        <Link
          onClick={() => unlockScrollState()}
          className="feed_link"
          to={`/home/user/${props.postUserId}`}
        >
          <div className="feed_profile_image_block">
            <img className="feed_profile_image" src={props.postProfileImage} />
          </div>
          <h3 className="feed_link_name">{props.postUsername}</h3>
        </Link>
        <div style={{ opacity: styledOpac }} className="feed_link_unfollow">
          <InlineUnfollow followerId={props.postUserId} />
        </div>
        <div onClick={() => props.modPostLoad(props.postId)}>
          {returnImage()}
        </div>
        <p>{returnText()}</p>
        <p
          onClick={() => props.modPostLoad(props.postId)}
          className="post_return_date"
        >
          Posted {returnDate(props.timestamp)}
        </p>
      </div>
      <div className="feed_link">{returnAllowed()}</div>
    </div>
  );
};

const IndMapper: React.FC<Mapper> = (props) => {
  const [callUser, { data }] = useLazyQuery(userCommentLookup);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (props.tag.includes("@")) {
      callUser({
        variables: {
          username: getUsername(),
        },
      });
    }
  }, []);

  useEffect(() => {
    if (data) {
      setUserData(data.specUser);
    }
  }, [data]);

  function getUsername() {
    let username = props.tag.slice(1, props.tag.length);
    return username;
  }

  function renderFunc() {
    if (data && userData && data.specUser != null) {
      return (
        <UserIndex
          highlightUsername={userData.username}
          highlightUserId={userData.userId}
          highlightBio={userData.bio}
          highlightProfileImage={userData.profileImage}
        />
      );
    } else {
      return <span className="tag_span"> {props.tag} </span>;
    }
  }

  return renderFunc();
};

export const FeedPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPostRender);
