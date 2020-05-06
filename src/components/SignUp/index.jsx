import React from "react";
import { FormInput, Button } from "../../components";
import "./SignUp.scss";
import {
  FirebaseAppContext,
  createUserProfileDocument,
} from "../../context/FirebaseContext";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [state, setState] = React.useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="sign-up">
      <h1 className="title">I do not have an account</h1>
      <span>Sign up with your email and password</span>
      <form submit={handleSubmit} className="sign-up">
        <FormInput></FormInput>
        <Button></Button>
      </form>
    </div>
  );
}
