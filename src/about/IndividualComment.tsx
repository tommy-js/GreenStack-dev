import React, { useState, useEffect } from "react";
import UserIndex from "./CommentHover/UserIndex";
import { returnDate } from "../notifications/notificationsTimestamp";
import { returnTaggedString } from "../globals/functions/returnTagged";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../queries/queries";

interface Props {
  username: string;
  text: string;
  timestamp: number;
}

interface Mapper {
  tag: string;
}

const IndividualComment: React.FC<Props> = (props) => {
  function returnText() {
    let tag = returnTaggedString(props.text);
    return (
      <div>
        {tag.map((el: any) => (
          <IndMapper tag={el} />
        ))}
      </div>
    );
  }

  return (
    <div id="tutorial_comment">
      <h3 id="tutorial_comment_username">{props.username}</h3>
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

  console.log(props.tag);

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

export default IndividualComment;
