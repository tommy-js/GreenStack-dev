import React, { useState, useContext } from "react";
import { userContext } from "../AppMain/App";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateInvisibleMutation } from "../queries/queries.js";

interface Props {
  updateInvisibleMutation: (variables: object) => any;
}

const Private: React.FC<Props> = (props) => {
  const { userVal } = useContext(userContext);
  const [checked, setChecked] = useState(userVal.invisible);

  function updateInvisible() {
    props
      .updateInvisibleMutation({
        variables: {
          userId: userVal.userId,
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
