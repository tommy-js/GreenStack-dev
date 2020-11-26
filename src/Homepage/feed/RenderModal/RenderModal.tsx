import React, { useEffect, useState } from "react";
import { CommentInputPost } from "../../CommentInputPost/CommentInputPost";
import { CommentSection } from "../../CommentSection/CommentSection";
import { LikePost } from "../LikePost/LikePost";
import { DislikePost } from "../DislikePost/DislikePost";
import { UserIndex } from "../../../about/UserIndex/UserIndex";
import { Link } from "react-router-dom";
import { UserRoute } from "../../../types/types";
import comment from "../../../images/comment.png";
import { returnDate, returnTaggedString, returnUserRoutes } from "./index";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import { enableBodyScroll } from "body-scroll-lock";

interface Mapper {
  tag: string;
}

interface Redux {
  userRoutes: UserRoute[];
  onUserRouteSet: (userRoutes: UserRoute[]) => void;
}

interface Props extends Redux {
  title: string;
  postUserId: string;
  userProfileImage: string;
  postImage: string;
  postId: string;
  postUsername: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  allowComments: boolean;
  allowLikes: boolean;
  comments: {
    userId: string;
    commentId: string;
    username: string;
    timestamp: number;
    text: string;
    likes: number;
    dislikes: number;
    subComments: [
      {
        userId: string;
        commentId: string;
        username: string;
        timestamp: number;
        text: string;
        likes: number;
        dislikes: number;
        parentCommentId: string;
      }
    ];
  }[];
  modPostLoad: (postId: string) => void;
}

const RenderModalPre: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);
  const [comments, setComments] = useState(props.comments.length);

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

  function modLikes() {
    setLikes(likes + 1);
  }

  function modDislikes() {
    setDislikes(dislikes + 1);
  }

  function modComments() {
    setComments(comments + 1);
  }

  useEffect(() => {
    let returned = returnUserRoutes(
      props.postUsername,
      props.postUserId,
      props.userRoutes
    );
    if (returned) props.onUserRouteSet(returned);
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

  function returnAllowed() {
    if (props.allowLikes === true) {
      return (
        <React.Fragment>
          <div className="post_values">
            <span className="post_value_inner">{likes}</span>
          </div>
          <LikePost
            userId={props.postUserId}
            postId={props.postId}
            modLikes={modLikes}
          />
          <div className="post_values">
            <span className="post_value_inner">{dislikes}</span>
          </div>
          <DislikePost
            userId={props.postUserId}
            postId={props.postId}
            modDislikes={modDislikes}
          />
          <div className="post_values">
            <span className="post_value_inner">{comments}</span>
          </div>
          <div className="like_button_block">
            <img className="like_button_image" src={comment} />
          </div>
        </React.Fragment>
      );
    } else return null;
  }

  function unlockScrollState() {
    const feed = document.getElementById("feed")!;
    if (feed) enableBodyScroll(feed);
  }

  return (
    <div id="render_modal">
      <div className="post_upper_block">
        <h2>{props.title}</h2>
        <Link
          className="feed_link"
          onClick={() => unlockScrollState()}
          to={`/home/user/${props.postUserId}`}
        >
          <div className="feed_profile_image_block">
            <img className="feed_profile_image" src={props.userProfileImage} />
          </div>
          <h3 className="feed_link_name">{props.postUsername}</h3>
        </Link>

        {returnImage()}
        <p className="post_text">{returnText()}</p>
      </div>
      <div className="post_lower_block">
        <p className="post_return_date">Posted {returnDate(props.timestamp)}</p>
        {returnAllowed()}
        <CommentInputPost
          userId={props.postUserId}
          postId={props.postId}
          modComments={modComments}
          allowComments={props.allowComments}
        />
        <CommentSection postId={props.postId} comments={props.comments} />
      </div>
    </div>
  );
};

const IndMapper: React.FC<Mapper> = (props) => {
  const [callUser, { data }] = useLazyQuery(userCommentLookup);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (props.tag.includes("@"))
      callUser({
        variables: {
          username: getUsername(),
        },
      });
  }, []);

  useEffect(() => {
    if (data) setUserData(data.specUser);
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

export const RenderModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderModalPre);
