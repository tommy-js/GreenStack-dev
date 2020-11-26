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
  modPrivate: (invisible: boolean) => void;
}

const PrivateRender: React.FC<Props> = (props) => {
  const [invisibleChecked, setInvisibleChecked] = useState(props.invisible);

  useEffect(() => {
    setInvisibleChecked(props.invisible);
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
        setInvisibleChecked(!invisibleChecked);
        props.modPrivate(!invisibleChecked);
        console.log(res);
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

const PrivateMutation = compose(
  graphql(updateInvisibleMutation, { name: "updateDarkModeMutation" })
)(PrivateRender);

export const Private = connect(mapStateToProps)(PrivateMutation);
