import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  subtitle: string;
  path: string;
  percent: number;
}

export const LearnComponent: React.FC<Props> = (props) => {
  const [renderOpac, setRenderOpac] = useState(0);

  function renderProgress() {
    if (props.percent < 25)
      return <p className="progress_flare">Just started!</p>;
    else if (props.percent >= 25 && props.percent < 75)
      return <p className="progress_flare">Getting there!</p>;
    else if (props.percent >= 75)
      return <p className="progress_flare">Almost there!</p>;
  }

  return (
    <Link to={props.path} className="learn_component_link">
      <div
        key={props.title}
        id="learn_individual_div"
        onMouseOver={() => setRenderOpac(1)}
        onMouseOut={() => setRenderOpac(0)}
      >
        <div id="learn_link">
          <div>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
          </div>
        </div>
        <div id="learn_individual_progress_div">
          <p className="progress_percent">{props.percent}/100</p>
          <div className="render_learn_flare" style={{ opacity: renderOpac }}>
            {renderProgress()}
          </div>
        </div>
      </div>
    </Link>
  );
};
