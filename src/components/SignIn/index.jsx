import React from "react";
import "./SignIn.scss";
import { FormInput, Button } from "../../components";
import {
  FirebaseAppContext,
  createUserProfileDocument,
} from "../../context/FirebaseContext";
import { useHistory } from "react-router-dom";

function SignIn() {
  const [state, setState] = React.useState({ email: "", password: "" });
  const { firebase, provider } = React.useContext(FirebaseAppContext);
  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const login = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(async (user) => {
        createUserProfileDocument(user, {
          city: "Amsterdam",
          zipcode: "1000AA",
        });
        history.push("/");
        console.log({ user });
      });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          type="email"
          value={state.email}
          required
          handleChange={(e) => setState({ ...state, email: e.target.value })}
          label="Email"
        />
        <FormInput
          type="password"
          value={state.password}
          required
          handleChange={(e) => setState({ ...state, password: e.target.value })}
          label="Password"
        />
        <div className="buttons">
          <Button type="submit">SIGN IN</Button>
          <Button onClick={login} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
