import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateDarkModeMutation } from "../queries/queries.js";

interface Props {
  darkmode: boolean;
  modDarkMode: (darkmode: boolean) => void;
  updateDarkModeMutation: (variables: object) => any;
}

const DarkMode: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState(props.darkmode);

  useEffect(() => {
    setChecked(props.darkmode);
  }, [props.darkmode]);

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
        props.modDarkMode(!checked);
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
