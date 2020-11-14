import React, { useEffect, useContext } from "react";
import FollowingElement from "./FollowingElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  following: any;
  userId: string;
}

interface Array {
  userId: string;
}

interface Props extends Redux {
  modRoutes: (arr: Array[]) => void;
}

const Following: React.FC<Props> = (props) => {
  const data = props.following;

  // Creates routes within the Homepage component for all the users in our Following list
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push({ userId: data[i].userId });
    }
    console.log(arr);
    props.modRoutes(arr);
  }, []);

  return (
    <div id="feed">
      <h2 className="list_header">Following({data.length})</h2>
      <div>
        {data.map((el: any) => (
          <FollowingElement
            userId={el.userId}
            username={el.username}
            bio={el.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Following);
