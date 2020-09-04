import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dropNotificationMutation } from "../queries/queries";

interface Props {
  userId: number;
  id: number;
  dropNotificationMutation: (variables: object) => void;
  returnNotifs: (id: number) => void;
}

const DropNotification: React.FC<Props> = (props) => {
  function dropNotification() {
    props.dropNotificationMutation({
      variables: {
        userId: props.userId,
        id: props.id,
      },
    });
    props.returnNotifs(props.id);
  }

  return <button onClick={() => dropNotification()}>Dismiss</button>;
};

export default compose(
  graphql(dropNotificationMutation, { name: "dropNotificationMutation" })
)(DropNotification);
