import React from "react";

interface Props {
  title: string;
  tab: number;
  changeTab: (tab: number) => void;
}

export const NotificationsLink: React.FC<Props> = (props) => {
  return (
    <div
      className="notifications_link"
      onClick={() => props.changeTab(props.tab)}
    >
      <p className="notifications_link_text">{props.title}</p>
    </div>
  );
};
