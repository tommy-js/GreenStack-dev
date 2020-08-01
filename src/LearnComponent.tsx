import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  path: string;
}

const LearnComponent: React.FC<Props> = (props) => {
  return (
    <Link to={props.path}>
      <div id="learn_individual_div">
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </div>
    </Link>
  );
};

export default LearnComponent;
