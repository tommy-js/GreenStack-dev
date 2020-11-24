import React from "react";

interface Props {
  text: string;
  hoverOver?: boolean;
  hoverOverSubtext?: string;
  headerPassIn?: () => void;
}

export const Header: React.FC<Props> = (props) => {
  function headerPassIn() {
    if (props.headerPassIn) props.headerPassIn();
    else return null;
  }

  if (props.hoverOver === true) {
    return (
      <div id="header" onClick={() => headerPassIn()}>
        <h1 id="header_major_text">{props.text}</h1>
        <h3 id="header_minor_text">{props.hoverOverSubtext}</h3>
      </div>
    );
  } else {
    return (
      <div id="header">
        <h1 id="header_simple_text">{props.text}</h1>
      </div>
    );
  }
};
