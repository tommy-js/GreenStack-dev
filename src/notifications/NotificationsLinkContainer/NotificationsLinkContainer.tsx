import React, { useState, useEffect } from "react";
import { NotificationsLink } from "../NotificationsLink/NotificationsLink";
a;
import { NotificationsHeader } from "../NotificationsHeader/NotificationsHeader";
import { NotificationsPortfolioValue } from "../NotificationsPortfolioValue/NotificationsPortfolioValue";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../actions/actions";

interface Redux {
  history: any;
  userId: string;
  invisible: any;
  allowCommentsOnPosts: any;
  darkmode: any;
  notifications: any;
  onDarkmodeSet: (darkmode: any) => void;
  onInvisibleSet: (invisible: any) => void;
  onAllowCommentsSet: (allowCommentsOnPosts: any) => void;
}

interface Data extends Redux {
  tab: number;
  changeTab: (tab: number) => void;
  modNotificationColor: (notifArr: object[]) => void;
}

interface LocalLink {
  changeTab: (tab: number) => void;
}

const NotificationsLinkContainer: React.FC<LocalLink> = (props) => {
  return (
    <div>
      <NotificationsHeader />
      <NotificationsPortfolioValue />
      <NotificationsLink
        title="Notifications"
        tab={1}
        changeTab={props.changeTab}
      />
      <NotificationsLink title="History" tab={2} changeTab={props.changeTab} />
      <NotificationsLink title="Settings" tab={3} changeTab={props.changeTab} />
    </div>
  );
};

export const NotifLink = connect(mapStateToProps)(NotificationsLinkContainer);
