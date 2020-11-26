import React from "react";
import save from "../../../images/save.png";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { setBioMutation } from "../../../queries/queries";

interface Props {
  bio: string;
  modEditing: (isEdit: boolean) => void;
  setBioMutation: (variables: object) => any;
}

const SetBioMutation: React.FC<Props> = (props) => {
  function modBio() {
    if (props.bio.length <= 120) {
      props
        .setBioMutation({
          variables: {
            token: sessionStorage.getItem("Token"),
            bio: props.bio,
          },
        })
        .catch((err: any) => {
          console.log(err);
        })
        .then((res: any) => {
          console.log(res);
          props.modEditing(false);
        });
    }
  }

  return <img id="bio_image" onClick={() => modBio()} src={save} />;
};

export const SetBio = compose(
  graphql(setBioMutation, { name: "setBioMutation" })
)(SetBioMutation);
