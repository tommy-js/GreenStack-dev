import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  path: string;
  percent: number;
}

const LearnComponent: React.FC<Props> = (props) => {
  return (
    <Link to={props.path} className="learn_component_link">
      <div key={props.title} id="learn_individual_div">
        <div id="learn_link">
          <div>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
          </div>
        </div>
        <div id="learn_individual_progress_div">
          <p>Progress: {props.percent}</p>
        </div>
      </div>
    </Link>
  );
};

export default LearnComponent;
