import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  path: string;
}

const LearnComponent: React.FC<Props> = (props) => {
  return (
    <div id="learn_individual_div">
      <div id="learn_link">
        <Link to={props.path}>
          <div>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
          </div>
        </Link>
      </div>
      <div id="learn_individual_progress_div">
        <p>Progress</p>
      </div>
    </div>
  );
};

export default LearnComponent;
