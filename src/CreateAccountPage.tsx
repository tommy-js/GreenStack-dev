import React from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import StandardButton from "./StandardButton";

const CreateAccountPage: React.FC = () => {
  function submitButton() {
    // CREATE ACCOUNT AND PASS TO MONGO
  }

  return (
    <div>
      <Header text="Create Account" />
      <InputContainer placeholder="Username" />
      <InputContainer placeholder="Password" />
      <StandardButton passFunction={submitButton} text="Create" />
    </div>
  );
};

export default CreateAccountPage;
