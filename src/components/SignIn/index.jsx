import React from "react";
import "./SignIn.scss";
import { FormInput, Button } from "../../components";
import { FirebaseAppContext } from "../../context/FirebaseContext";
import { useHistory } from "react-router-dom";

function SignIn() {
  const [state, setState] = React.useState({ email: "", password: "" });
  const { firebase, provider } = React.useContext(FirebaseAppContext);
  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const login = () => {
    console.log(
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          console.log({ user });
          history.push("/userpage");
        })
    );
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
        <Button type="submit">Sign In</Button>
        <Button onClick={login}>Google Sign IN</Button>
      </form>
    </div>
  );
}

export default SignIn;
