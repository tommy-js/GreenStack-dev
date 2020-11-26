import React, { useEffect, useState } from "react";
import { UserQuestion } from "../UserQuestion/UserQuestion";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { saveSettingsMutation } from "../../queries/queries.js";

interface Props {
  id: number;
  nextPage: (id: number) => void;
  backPage: (id: number) => void;
  saveSettingsMutation: (variables: object) => any;
}

const RenderPageOneMutation: React.FC<Props> = (props) => {
  const [selectedState, setSelectedState] = useState({
    experience: 0,
    education: 0,
    motivations: 0,
  });

  const option1 = [
    { option: "Brand new" },
    { option: "Pretty fresh" },
    { option: "Been around a while" },
    { option: "I'm very knowledgable" },
    { option: "I'm an expert" },
  ];

  const option2 = [
    { option: "I'm in middle school" },
    { option: "I'm in high-school" },
    { option: "I'm in college" },
    { option: "I'm not in school" },
  ];

  const option3 = [
    { option: "For the memes/community" },
    { option: "To find new stocks" },
    { option: "To learn without risk" },
    { option: "To learn how to trade" },
  ];

  function modSelected(id: number, index: number) {
    if (index === 0) {
      setSelectedState({
        experience: id,
        education: selectedState.education,
        motivations: selectedState.motivations,
      });
    } else if (index === 1) {
      setSelectedState({
        experience: selectedState.experience,
        education: id,
        motivations: selectedState.motivations,
      });
    } else if (index === 2) {
      setSelectedState({
        experience: selectedState.experience,
        education: selectedState.education,
        motivations: id,
      });
    }
  }

  function save() {
    props
      .saveSettingsMutation({
        variables: {
          token: sessionStorage.getItem("Token"),
          experience: selectedState.experience,
          education: selectedState.education,
          motivations: selectedState.motivations,
        },
      })
      .catch((err: any) => console.log(err))
      .then((res: any) => {
        console.log(res);
      });
  }

  return (
    <div>
      <UserQuestion
        question="How new to the stock market are you?"
        index={0}
        selected={selectedState.experience}
        modSelected={modSelected}
        options={option1}
      />
      <UserQuestion
        question="What best describes you?"
        index={1}
        selected={selectedState.education}
        modSelected={modSelected}
        options={option2}
      />
      <UserQuestion
        question="Why are you using this app?"
        index={2}
        selected={selectedState.motivations}
        modSelected={modSelected}
        options={option3}
      />
      <div className="render_pages_button_container">
        <button
          className="render_button_right"
          onClick={() => props.nextPage(props.id)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export const RenderPageOne = compose(
  graphql(saveSettingsMutation, { name: "saveSettingsMutation" })
)(RenderPageOneMutation);
