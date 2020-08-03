import React, { useEffect, useState } from "react";
import ProfileActivityPurchase from "./ProfileActivityPurchase";
import ProfileActivityComment from "./ProfileActivityComment";

interface Props {
  type: string;
  user: string;
  title?: string;
  ticker?: string;
  comment?: string;
  likes?: number;
  dislikes?: number;
  tradeId?: number;
  shares?: number;
  price?: number;
  gain?: number;
  timestamp: number;
}

const ProfileActivity: React.FC<Props> = (props) => {
  function showData() {
    if (props.comment && props.likes && props.dislikes) {
      return (
        <div>
          <ProfileActivityComment
            type={props.type}
            user={props.user}
            comment={props.comment}
            likes={props.likes}
            dislikes={props.dislikes}
            timestamp={props.timestamp}
          />
        </div>
      );
    } else if (
      props.title &&
      props.ticker &&
      props.tradeId &&
      props.shares &&
      props.price &&
      props.gain
    ) {
      return (
        <div>
          <ProfileActivityPurchase
            type={props.type}
            user={props.user}
            title={props.title}
            ticker={props.ticker}
            tradeId={props.tradeId}
            shares={props.shares}
            price={props.price}
            gain={props.gain}
            timestamp={props.timestamp}
          />
        </div>
      );
    }
  }

  return <div>{showData()}</div>;
};

export default ProfileActivity;
