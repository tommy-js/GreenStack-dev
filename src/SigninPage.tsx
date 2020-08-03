import React from "react";
import Header from "./Header";
import InputContainer from "./InputContainer";
import StandardButton from "./StandardButton";

const SigninPage: React.FC = () => {
  function submitButton() {
    // CHECK CREDENTIALS FROM MONGO AND THEN SIGN IN USER
  }

  return (
    <div>
      <Header text="Login" />
      <InputContainer placeholder="Username" />
      <InputContainer placeholder="Password" />
      <StandardButton passFunction={submitButton} text="Sign In" />
    </div>
  );
};

export default SigninPage;
