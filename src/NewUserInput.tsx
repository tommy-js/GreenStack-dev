import React from "react";
import Header from "./Header";
import AccountCreation from "./login/AccountCreation";

interface Props {
  headerPassIn: () => void;
}

const NewUserInput: React.FC<Props> = (props) => {
  function headerPassIn() {
    props.headerPassIn();
  }

  return (
    <div>
      <Header
        headerPassIn={headerPassIn}
        text="Stocker"
        hoverOver={true}
        hoverOverSubtext="about us"
      />
      <AccountCreation />
    </div>
  );
};

export default NewUserInput;
