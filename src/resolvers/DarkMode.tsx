import React, { useState, useContext } from "react";
import { userContext } from "../AppMain/App";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateDarkModeMutation } from "../queries/queries.js";

interface Props {
  updateDarkModeMutation: (variables: object) => any;
}

const DarkMode: React.FC<Props> = (props) => {
  const { userVal } = useContext(userContext);
  const [checked, setChecked] = useState(userVal.darkmode);

  function updateDarkMode() {
    props
      .updateDarkModeMutation({
        variables: {
          userId: userVal.userId,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        setChecked(!checked);
      });
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => updateDarkMode()}
      />
      <label>Dark Mode</label>
    </div>
  );
};

export default compose(
  graphql(updateDarkModeMutation, { name: "updateDarkModeMutation" })
)(DarkMode);
