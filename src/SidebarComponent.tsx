import React from "react";

interface Props {
  text: string;
}

const SidebarComponent: React.FC<Props> = (props) => {
  return <h2 id="sidebar_component">{props.text}</h2>;
};

export default SidebarComponent;
