import React from "react";

interface Props {
  headline: string;
}

export const KCHeadline: React.FC<Props> = (props) => {
  return <h2 id="knowledge_check_headline">{props.headline}</h2>;
};
