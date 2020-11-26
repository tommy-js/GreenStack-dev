import React, { useEffect, useState } from "react";
import { LikePostComment } from "../post/LikePostComment/LikePostComment";
import { DislikePostComment } from "../post/DislikePostComment/DislikePostComment";
import { UserIndex } from "../../about/UserIndex/UserIndex";
import { IndividualCommentSubComments } from "../IndividualCommentSubComments/IndividualCommentSubComments";
import { IndividualCommentReply } from "../IndividualCommentReply/IndividualCommentReply";
import comment from "../../images/comment.png";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { returnDate, returnTaggedString } from "./index";

type Routes = {
  username: string;
  userId: string;
  bio: string;
  profileImage: string;
};

type SubComments = {
  userId: string;
  commentId: string;
  username: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
  parentCommentId: string;
};

interface Mapper {
  tag: string;
}

interface Redux {
  userRoutes: any;
  onUserRouteSet: (userRoutes: any) => void;
}

interface Props extends Redux {
  postId: string;
  commentId: string;
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  commentUsername: string;
  commentUserId: string;
  subComments: SubComments[];
}

const IndividualCommentRender: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);
  const [transferedDisp, setTransferedDisp] = useState("none");
  const [disp, setDisp] = useState(false);

  useEffect(() => {
    let foundInd = props.userRoutes.find(
      (el: Routes) => el.userId === props.commentUserId
    );
    if (!foundInd) {
      let obj = {
        username: props.commentUsername,
        userId: props.commentUserId,
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

  function likeIncrement() {
    let like = Number(likes);
    like++;
    setLikes(like);
  }

  function dislikeIncrement() {
    let dislike = Number(dislikes);
    dislike++;
    setDislikes(dislike);
  }

  function modDisp() {
    if (disp === true) setTransferedDisp("none");
    else setTransferedDisp("block");
    setDisp(!disp);
  }

  return (
    <div className="comment">
      <p className="comment_name">{props.commentUsername}</p>
      <p className="comment_time">posted at {returnDate(props.timestamp)}</p>
      <p className="comment_text">{returnText()}</p>
      <div className="comment_information">
        {likes}
        <LikePostComment
          postId={props.postId}
          commentId={props.commentId}
          modLikes={likeIncrement}
        />
        , {dislikes}{" "}
        <DislikePostComment
          postId={props.postId}
          commentId={props.commentId}
          modDislikes={dislikeIncrement}
        />
        <div className="post_values">
          <span className="post_value_inner">{props.subComments.length}</span>
        </div>
        <div className="like_button_block" onClick={() => modDisp()}>
          <img className="like_button_image" src={comment} />
        </div>
      </div>
      <IndividualCommentReply
        postId={props.postId}
        commentId={props.commentId}
      />
      <IndividualCommentSubComments
        postId={props.postId}
        transferedDisp={transferedDisp}
        subComments={props.subComments}
      />
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
    if (data) setUserData(data.specUser);
  }, [data]);

  function getUsername() {
    let username = props.tag.slice(1, props.tag.length);
    return username;
  }

  function renderFunc() {
    if (data && userData && data.specUser != null)
      return (
        <UserIndex
          highlightUsername={userData.username}
          highlightUserId={userData.userId}
          highlightBio={userData.bio}
          highlightProfileImage={userData.profileImage}
        />
      );
    else return <span className="tag_span"> {props.tag} </span>;
  }

  return renderFunc();
};

export const IndividualComment = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualCommentRender);
