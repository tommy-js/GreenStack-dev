import React, { useState } from "react";
import DropNotification from "../resolvers/DropNotification";
import { Link } from "react-router-dom";
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
      props
        .updateUserNotificationsViewedMutation({
          variables: {
            id: props.id,
          },
        })
        .catch((err: any) => {
          console.log(err);
        })
        .then((res: any) => {
          console.log(res);
          props.modNotifs(props.id);
        });
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
      <Link to="/notifications">
        <p>{props.content}</p>
      </Link>
      <DropNotification id={props.id} />
      {checkViewed()}
    </div>
  );
};

export default compose(
  graphql(updateUserNotificationsViewedMutation, {
    name: "updateUserNotificationsViewedMutation",
  })
)(NotificationsElement);
