import React from "react";
import NewUserInput from "./NewUserInput";
import AboutUs from "./AboutUs";

interface Props {
  headerPassIn: () => void;
}

const SplitView: React.FC<Props> = (props) => {
  function headerPassIn() {
    props.headerPassIn();
  }

  return (
    <div>
      <div id="left_align">
        <NewUserInput headerPassIn={headerPassIn} />
      </div>
      <div id="right_align">
        <AboutUs />
      </div>
    </div>
  );
};

export default SplitView;
