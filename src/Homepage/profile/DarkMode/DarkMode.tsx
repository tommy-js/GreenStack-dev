import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateDarkModeMutation } from "../../../queries/queries.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";

interface Redux {
  darkmode: boolean;
}

interface Props extends Redux {
  updateDarkModeMutation: (variables: object) => any;
  modDarkMode?: (darkmode: boolean) => void;
}

const DarkModeRender: React.FC<Props> = (props) => {
  const [darkmodeChecked, setDarkmodeChecked] = useState(props.darkmode);

  useEffect(() => {
    setDarkmodeChecked(props.darkmode);
  }, [props.darkmode]);

  function updateDarkMode() {
    props
      .updateDarkModeMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
        },
      })
      .catch((err: any) => console.log(err))
      .then(() => {
        if (props.modDarkMode) props.modDarkMode(!darkmodeChecked);
        setDarkmodeChecked(!darkmodeChecked);
      });
  }

  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={darkmodeChecked}
        onChange={() => updateDarkMode()}
      />
      <label>Dark Mode</label>
    </React.Fragment>
  );
};

const DarkModeMutation = compose(
  graphql(updateDarkModeMutation, { name: "updateDarkModeMutation" })
)(DarkModeRender);

export const DarkMode = connect(mapStateToProps)(DarkModeMutation);
