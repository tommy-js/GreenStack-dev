import React from "react";

interface Props {
  headline: string;
  res: string | null;
}

export const KnowledgeCheckHeadline: React.FC<Props> = (props) => {
  return (
    <h2 id="knowledge_check_headline">
      {props.headline}{" "}
      <span className="render_ans correct_ans">{props.res}</span>
    </h2>
  );
};
