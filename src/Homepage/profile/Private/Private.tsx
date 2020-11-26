import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateInvisibleMutation } from "../../../queries/queries.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";

interface Redux {
  invisible: boolean;
}

interface Props extends Redux {
  updateInvisibleMutation: (variables: object) => any;
  modPrivate?: (invisible: boolean) => void;
}

const PrivateRender: React.FC<Props> = (props) => {
  const [invisibleChecked, setInvisibleChecked] = useState(props.invisible);

  useEffect(() => {
    setInvisibleChecked(props.invisible);
  }, [props.invisible]);

  function updateInvisible() {
    props
      .updateInvisibleMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
        },
      })
      .catch((err: any) => console.log(err))
      .then(() => {
        setInvisibleChecked(!invisibleChecked);
        if (props.modPrivate) props.modPrivate(!invisibleChecked);
      });
  }

  return (
    <React.Fragment>
      <input
        type="checkbox"
        checked={invisibleChecked}
        onChange={() => updateInvisible()}
      />
      <label>Set Account To Private</label>
    </React.Fragment>
  );
};

const PrivateRedux = connect(mapStateToProps)(PrivateRender);

export const Private = compose(
  graphql(updateInvisibleMutation, { name: "updateInvisibleMutation" })
)(PrivateRedux);
