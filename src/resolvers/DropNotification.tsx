import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dropNotificationMutation } from "../queries/queries";

interface Props {
  id: number;
  dropNotificationMutation: (variables: object) => any;
  modDisp: () => void;
}

const DropNotification: React.FC<Props> = (props) => {
  function dropNotification() {
    let token = sessionStorage.getItem("Token");
    props
      .dropNotificationMutation({
        variables: {
          token: token,
          id: props.id,
        },
      })
      .catch((res: any) => console.log("err"));
  }

  return <button onClick={() => dropNotification()}>Dismiss</button>;
};

export default compose(
  graphql(dropNotificationMutation, { name: "dropNotificationMutation" })
)(DropNotification);
