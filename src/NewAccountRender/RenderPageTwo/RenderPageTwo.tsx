import React from "react";
import { TickerList } from "../TickerList/TickerList";

interface Props {
  id: number;
  nextPage: (id: number) => void;
  backPage: (id: number) => void;
}

export const RenderPageTwo: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
