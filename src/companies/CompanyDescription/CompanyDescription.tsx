import React from "react";

interface Props {
  title: string;
  description: string;
}

export const CompanyDescription: React.FC<Props> = (props) => {
  return (
    <div id="company_description_block">
      <h2>About {props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};
