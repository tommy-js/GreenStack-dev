import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateInvisibleMutation } from "../queries/queries.js";

interface Props {
  invisible: boolean;
  modPrivate: (invisible: boolean) => void;
  updateInvisibleMutation: (variables: object) => any;
}

const Private: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState(props.invisible);

  useEffect(() => {
    setChecked(props.invisible);
  }, [props.invisible]);

  function updateInvisible() {
    let token = sessionStorage.getItem("Token");
    props
      .updateInvisibleMutation({
        variables: {
          token: token,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setChecked(!checked);
        props.modPrivate(!checked);
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
