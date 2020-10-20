import React, { useState, useContext } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateDarkModeMutation } from "../queries/queries.js";

interface Props {
  darkmode: boolean;
  updateDarkModeMutation: (variables: object) => any;
}

const DarkMode: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState(props.darkmode);

  function updateDarkMode() {
    let token = sessionStorage.getItem("Token");
    props
      .updateDarkModeMutation({
        variables: {
          token: token,
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
