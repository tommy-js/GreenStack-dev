import React, { useState, useContext } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateInvisibleMutation } from "../queries/queries.js";

interface Props {
  invisible: boolean;
  updateInvisibleMutation: (variables: object) => any;
}

const Private: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState(props.invisible);

  function updateInvisible() {
    props
      .updateInvisibleMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setChecked(!checked);
        console.log(res);
      });
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => updateInvisible()}
      />
      <label>Set Account To Private</label>
    </div>
  );
};

export default compose(
  graphql(updateInvisibleMutation, { name: "updateInvisibleMutation" })
)(Private);
