import React, { useState } from "react";
import ProfileActivity from "./ProfileActivity";
import Header from "../Header";

interface Props {
  testData: any;
}

const FollowedActivity: React.FC<Props> = (props) => {
  return (
    <div id="user_activity_feed">
      <Header text="Your Follows" />
      <div>
        {props.testData.map((el: any) => (
          <ProfileActivity
            user={el.user}
            type={el.type}
            title={el.title}
            ticker={el.ticker}
            tradeId={el.tradeId}
            comment={el.comment}
            likes={el.likes}
            dislikes={el.dislikes}
            shares={el.shares}
            price={el.price}
            gain={el.gain}
            timestamp={el.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default FollowedActivity;
