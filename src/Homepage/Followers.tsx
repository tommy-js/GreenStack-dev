import React, { useEffect } from "react";
import FollowerElement from "./FollowerElement";
import { connect } from "react-redux";
import { mapStateToProps } from "../actions/actions";

interface Redux {
  followers: any;
}

interface Array {
  userId: string;
}

interface Props extends Redux {
  modRoutes: (arr: Array[]) => void;
}

const Followers: React.FC<Props> = (props) => {
  const data = props.followers;

  // Creates routes within the Homepage component for all the users in our Followers list
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      arr.push({ userId: data[i].userId });
    }
    props.modRoutes(arr);
  }, []);

  return (
    <div id="feed">
      <h2 className="list_header">Your Followers({data.length})</h2>
      <div>
        {data.map((el: any) => (
          <FollowerElement
            key={el.id}
            userId={el.followerId}
            username={el.followerName}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Followers);
