import React, { useEffect, useState } from "react";
import TickerList from "./TickerList";
import FollowerCheck from "./FollowerCheck";
import UserQuestion from "./UserQuestion";
import RenderPageButtonStateSave from "../resolvers/RenderPageButtonStateSave";

interface Props {
  id: number;
  nextPage: (id: number) => void;
  backPage: (id: number) => void;
}

interface Submission extends Props {
  submit: () => void;
}

export const PageOne: React.FC<Props> = (props) => {
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

  useEffect(() => {
    console.log(selectedState);
  }, [selectedState]);

  function renderNextPage() {
    props.nextPage(props.id);
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
        <RenderPageButtonStateSave
          text="Next"
          renderNextPage={renderNextPage}
          selectedState={selectedState}
        />
      </div>
    </div>
  );
};

export const PageTwo: React.FC<Props> = (props) => {
  return (
    <div>
      <p className="user_init_questions">Which stocks here interest you?</p>
      <TickerList />
      <div className="render_pages_button_container">
        <button
          className="render_button_left"
          onClick={() => props.backPage(props.id)}
        >
          Back
        </button>
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

export const PageThree: React.FC<Submission> = (props) => {
  return (
    <div>
      <p className="user_init_questions">
        What kind of commentary are you looking for from those you follow?
      </p>
      <FollowerCheck />
      <div className="render_pages_button_container">
        <button
          className="render_button_left"
          onClick={() => props.backPage(props.id)}
        >
          Back
        </button>
        <button className="render_button_right" onClick={() => props.submit()}>
          Submit
        </button>
      </div>
    </div>
  );
};
