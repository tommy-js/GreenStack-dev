import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dropNotificationMutation } from "../queries/queries";

interface Props {
  userId: number;
  id: number;
  dropNotificationMutation: (variables: object) => any;
}

const DropNotification: React.FC<Props> = (props) => {
  function dropNotification() {
    props
      .dropNotificationMutation({
        variables: {
          userId: props.userId,
          id: props.id,
        },
      })
      .then((res: any) => console.log("passed"))
      .catch((res: any) => console.log("err"));
  }

  return <button onClick={() => dropNotification()}>Dismiss</button>;
};

export default compose(
  graphql(dropNotificationMutation, { name: "dropNotificationMutation" })
)(DropNotification);
