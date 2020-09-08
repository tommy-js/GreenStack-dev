import React, { useState } from "react";
import DropNotification from "../resolvers/DropNotification";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserNotificationsViewedMutation } from "../queries/queries";

interface Notifs {
  content: string;
  userId: number;
  id: number;
  viewed: boolean;
  modNotifs: (id: number) => void;
  updateUserNotificationsViewedMutation: (variables: object) => any;
}

const NotificationsElement: React.FC<Notifs> = (props) => {
  const [viewed, setViewed] = useState(props.viewed);

  function checkViewed() {
    if (viewed === false) {
      // props
      //   .updateUserNotificationsViewedMutation({
      //     variables: {
      //       id: props.id,
      //     },
      //   })
      //   .catch((err: any) => {
      //     console.log("error");
      //   })
      //   .then((res: any) => {
      //     console.log("success");
      //     props.modNotifs(props.id);
      //   });
      props.modNotifs(props.id);
      return (
        <div onClick={() => setViewed(true)}>
          <p>Not yet seen!</p>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="notifications_link" key={props.id}>
      <p>{props.content}</p>
      <DropNotification id={props.id} userId={props.userId} />
      {checkViewed()}
    </div>
  );
};

export default compose(
  graphql(updateUserNotificationsViewedMutation, {
    name: "updateUserNotificationsViewedMutation",
  })
)(NotificationsElement);
