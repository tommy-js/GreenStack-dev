import React from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { updateUserProfileImageMutation } from "../../../queries/queries.js";

interface Props {
  image: string;
  saveImage: (img: string) => void;
  updateUserProfileImageMutation: (variables: object) => any;
}

const SaveProfileImageMutation: React.FC<Props> = (props) => {
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
        props.saveImage(props.image);
      })
      .catch((err: any) => console.log(err));
  }

  return (
    <button className="blank_submit" onClick={() => submit()}>
      Save
    </button>
  );
};

export const SaveProfileImage = compose(
  graphql(updateUserProfileImageMutation, {
    name: "updateUserProfileImageMutation",
  })
)(SaveProfileImageMutation);
