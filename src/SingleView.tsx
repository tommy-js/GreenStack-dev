import React from "react";
import NewUserInput from "./NewUserInput";

interface Props {
  headerPassIn: () => void;
}

const SingleView: React.FC<Props> = (props) => {
  function headerPassIn() {
    props.headerPassIn();
  }

  return (
    <div id="full_align">
      <NewUserInput headerPassIn={headerPassIn} />
    </div>
  );
};

export default SingleView;
