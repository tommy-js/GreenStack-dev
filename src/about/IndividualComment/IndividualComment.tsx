import React, { useState, useEffect } from "react";
import { UserIndex } from "../UserIndex/UserIndex";
import { Link } from "react-router-dom";
import { returnTaggedString, returnDate } from "./index";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";
import { UserRoute } from "../../types/types";

type Tag = string;

interface Redux {
  userRoutes: UserRoute[];
  onUserRouteSet: (userRoutes: UserRoute[]) => void;
}

interface Props extends Redux {
  commentUsername: string;
  commentUserId: string;
  text: string;
  timestamp: number;
}

interface Mapper {
  tag: string;
}

const IndividualCommentRender: React.FC<Props> = (props) => {
  useEffect(() => {
    let foundInd = props.userRoutes.find(
      (el: UserRoute) => el.userId === props.commentUserId
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
      <div>
        {tag.map((el: Tag) => (
          <IndMapper tag={el} />
        ))}
      </div>
    );
  }

  return (
    <div id="tutorial_comment">
      <h3 id="tutorial_comment_username">
        <Link to={`/home/user/${props.commentUserId}`}>
          {props.commentUsername}
        </Link>
      </h3>
      <p id="tutorial_comment_text">{returnText()}</p>
      <h4 id="tutorial_comment_timestamp">
        Posted at {returnDate(props.timestamp)}
      </h4>
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

export const IndividualComment = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualCommentRender);
