import React, { useContext } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { saveSettingsMutation } from "../queries/queries.js";
import { userContext } from "../AppMain/App";

interface Props {
  text: string;
  selectedState: {
    experience: number;
    education: number;
    motivations: number;
  };
  renderNextPage: () => void;
  saveSettingsMutation: (variables: object) => any;
}

const RenderPageButtonStateSave: React.FC<Props> = (props) => {
  const { userVal, setUserVal } = useContext(userContext);

  function save() {
    props
      .saveSettingsMutation({
        variables: {
          userId: userVal.userId,
          experience: props.selectedState.experience,
          education: props.selectedState.education,
          motivations: props.selectedState.motivations,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        console.log(res);
        props.renderNextPage();
      });
  }

  return (
    <button className="render_button_right" onClick={() => save()}>
      {props.text}
    </button>
  );
};

export default compose(
  graphql(saveSettingsMutation, { name: "saveSettingsMutation" })
)(RenderPageButtonStateSave);
