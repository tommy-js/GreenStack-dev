import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserProfileImageMutation } from "../queries/queries.js";

interface Props {
  image: string;
  updateUserProfileImageMutation: (variables: object) => any;
}

const SaveProfileImage: React.FC<Props> = (props) => {
  function submit() {
    let token = sessionStorage.getItem("Token");
    props
      .updateUserProfileImageMutation({
        variables: {
          token: token,
          image: props.image,
        },
      })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => console.log(err));
  }

  return (
    <button className="blank_submit" onClick={() => submit()}>
      Save
    </button>
  );
};

export default compose(
  graphql(updateUserProfileImageMutation, {
    name: "updateUserProfileImageMutation",
  })
)(SaveProfileImage);
