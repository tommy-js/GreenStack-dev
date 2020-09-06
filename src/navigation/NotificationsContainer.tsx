import React from "react";
import NotificationsLink from "./NotificationsLink";

interface Link {
  changeTab: (tab: number) => void;
}

interface Data {
  tab: number;
  data: object[];
  changeTab: (tab: number) => void;
}

export const NotificationsLinkContainer: React.FC<Link> = (props) => {
  return (
    <div>
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

export const NotificationsDataContainer: React.FC<Data> = (props) => {
  function checkTab() {
    if (props.tab === 1) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          {props.data.map((el: any) => (
            <div>
              <p>text</p>
              <button>dismiss</button>
            </div>
          ))}
        </div>
      );
    } else if (props.tab === 2) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          {props.data.map((el: any) => (
            <div>
              <p>text</p>
              <p>timestamp</p>
            </div>
          ))}
        </div>
      );
    } else if (props.tab === 3) {
      return (
        <div>
          <button onClick={() => props.changeTab(0)}>back</button>
          {props.data.map((el: any) => (
            <div>
              <p>setting 1</p>
              <p>setting 2</p>
            </div>
          ))}
        </div>
      );
    }
  }

  return <div>{checkTab()}</div>;
};
