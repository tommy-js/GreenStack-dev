import React from "react";
import { Link } from "react-router-dom";

interface Props {
  text: string;
  path: string;
}

const MenuItem: React.FC<Props> = (props) => {
  return (
    <div>
      <Link to={props.path}>
        <h3>{props.text}</h3>
      </Link>
    </div>
  );
};

export default MenuItem;
